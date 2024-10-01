import { useState, useEffect } from "react";
import Link from "next/link";
import api from "@/services/api";
import { useRouter } from "next/router";

const UpdateForm = ({ model, token }) => {
  const router = useRouter();
  const [title, setTitle] = useState(""); // Set initial state from model
  const [area, setArea] = useState("");
  const [gfGrossArea, setGfGrossArea] = useState("");
  const [gfTerrace, setGfGTerrace] = useState("");
  const [gfPool, setGfPool] = useState("");
  const [ffGrossArea, setFfGrossArea] = useState("");
  const [ffTerrace, setFfTerrace] = useState("");
  const [roomCount, setRoomCount] = useState("");
  const [mainPicture, setMainPicture] = useState("");
  const [filter, setFilter] = useState("");
  const [images, setImages] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletingImageId, setDeletingImageId] = useState(null);

  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState(false);

  useEffect(() => {
    setImages(model.Images);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert("");

    try {
      const response = await api.put(
        `/portfoilos/updateModel/${model.id}`,
        {
          title,
          area,
          groundFloorGrossArea: gfGrossArea, // Use correct state variable
          groundFloorTerrace: gfTerrace,
          groundFloorPool: gfPool,
          firstFloorGrossArea: ffGrossArea,
          firstFloorTerrace: ffTerrace,
          roomCount,
          mainPicture,
          filter,
          images,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setAlert("Kayıt başarılı");
        setAlertType(true);
      } else {
        setAlert("Kayıt başarısız");
        setAlertType(false);
      }
    } catch (err) {
      console.log(err);
      setAlert("Something went wrong");
      setAlertType(false);
    }
  };

  const handleImageDelete = async (imageId) => {
    if (isDeleting) return; // Eğer silme işlemi devam ediyorsa, yeni istek atma

    setIsDeleting(true);
    setDeletingImageId(imageId);
    setAlert("");

    try {
      const response = await api.delete(`/portfoilos/deleteImage/${imageId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 10000, // 10 saniye timeout ekle
      });

      if (response.data.success) {
        // UI'dan resmi hemen kaldır
        setImages((prevImages) =>
          prevImages.filter((img) => img.id !== imageId)
        );
        setAlert("Resim başarıyla silindi");
        setAlertType(true);
      } else {
        throw new Error("Sunucu silme işlemini reddetti");
      }
    } catch (err) {
      console.error("Resim silme hatası:", err);
      setAlert(
        err.response?.data?.message || "Resim silinirken bir hata oluştu"
      );
      setAlertType(false);
    } finally {
      setIsDeleting(false);
      setDeletingImageId(null);
    }
  };

  return (
    <div className="card mb-0">
      <div className="card-body">
        <p className="text-center text-white fs-4 pt-5">Model Güncelle</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xxl-6 col-lg-6 col-md-6">
              <div className="form-group mt-3">
                <label htmlFor="mainPicture" className="form-label text-white">
                  Ana Resim
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="mainPicture"
                  onChange={(e) => setMainPicture(e.target.files[0])} // Use files[0] for the first file
                />
                <div className="col-lg-4 mt-5">
                  <div className="card text-white">
                    <img
                      src={model.mainPicture}
                      className="card-img-top"
                      alt="Main"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="images" className="form-label text-white">
                  Resimler
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="images"
                  multiple
                  onChange={(e) => setImages(Array.from(e.target.files))} // Convert file list to array
                />
              </div>
              <div className="row">
                {images &&
                  images.map((img, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mt-3">
                      <div className="card text-white">
                        <img
                          src={`${img.url}`}
                          className="card-img-top"
                          alt={`Image ${index}`}
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <button
                              type="button"
                              className="btn btn-outline-danger btn-lg"
                              onClick={() => handleImageDelete(img.id)}
                              disabled={
                                isDeleting && deletingImageId === img.id
                              }
                            >
                              {isDeleting && deletingImageId === img.id
                                ? "Siliniyor..."
                                : "Sil"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6 col-md-6">
              <div className="form-group mt-3">
                <label htmlFor="title" className="form-label text-white">
                  Başlık
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={model.title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="area" className="form-label text-white">
                  Alan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="area"
                  value={model.area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="gfGrossArea" className="form-label text-white">
                  Zemin Kat Brüt Alan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gfGrossArea"
                  value={model.groundFloorGrossArea}
                  onChange={(e) => setGfGrossArea(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="gfTerrace" className="form-label text-white">
                  Zemin Kat Teras
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gfTerrace"
                  value={model.groundFloorTerrace}
                  onChange={(e) => setGfGTerrace(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="gfPool" className="form-label text-white">
                  Havuz
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gfPool"
                  value={model.groundFloorPool}
                  onChange={(e) => setGfPool(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="ffGrossArea" className="form-label text-white">
                  1.Kat Brüt Alan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ffGrossArea"
                  value={model.firstFloorGrossArea}
                  onChange={(e) => setFfGrossArea(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="ffTerrace" className="form-label text-white">
                  1.Kat Teras
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ffTerrace"
                  value={model.firstFloorTerrace}
                  onChange={(e) => setFfTerrace(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="roomCount" className="form-label text-white">
                  Oda Sayısı
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="roomCount"
                  value={model.roomCount}
                  onChange={(e) => setRoomCount(e.target.value)}
                />
              </div>
              <div className="form-group mt-3 mb-3">
                <label htmlFor="filter" className="form-label text-white">
                  Filtre (anasayfadaki bölüm için)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="filter"
                  value={model.filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
              <div
                className="btn-group btn-group-lg  d-flex"
                role="group"
                aria-label="Large button group"
              >
                <button
                  type="submit"
                  className="btn btn-primary fs-4 rounded-2 me-5"
                >
                  Güncelle
                </button>
                <Link
                  href="/admin/models"
                  className="btn btn-danger fs-4 rounded-2"
                  type="button"
                >
                  Geri Dön
                </Link>
              </div>
              {alert && (
                <div
                  className={
                    alertType
                      ? "alert alert-primary mt-3"
                      : "alert alert-danger mt-3"
                  }
                >
                  {alert}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
