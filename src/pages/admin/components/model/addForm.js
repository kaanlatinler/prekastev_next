import { useState } from "react";
import Link from "next/link";
import api from "@/services/api"; // Eğer api servisiniz bu şekildeyse, doğru yolu kontrol edin
import { CldUploadWidget } from "next-cloudinary";

const AddForm = ({ token }) => {
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");
  const [groundFloorGrossArea, setGroundFloorGrossArea] = useState("");
  const [groundFloorTerrace, setGroundFloorTerrace] = useState("");
  const [groundFloorPool, setGroundFloorPool] = useState("");
  const [firstFloorGrossArea, setFirstFloorGrossArea] = useState("");
  const [firstFloorTerrace, setFirstFloorTerrace] = useState("");
  const [roomCount, setRoomCount] = useState("");
  const [filter, setFilter] = useState("");
  const [mainPicture, setMainPicture] = useState(null);
  const [images, setImages] = useState([]);
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState(false);

  const handleMainUpload = (data) => {
    if (data && data.event === "success") {
      setMainPicture(data.info.secure_url);
    } else {
      console.warn("Unexpected result:", data);
    }
  };

  const handleImagesUpload = (data) => {
    if (data && data.event === "success") {
      setImages((prevImages) => [...prevImages, data.info.secure_url]); // Yeni URL'yi ekle
    } else {
      console.warn("Unexpected result:", data);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const payload = {
        title,
        area,
        groundFloorGrossArea,
        groundFloorTerrace,
        groundFloorPool,
        firstFloorGrossArea,
        firstFloorTerrace,
        roomCount,
        filter,
        mainPicture,
        images,
      };

      const response = await api.post(`/portfoilos/addPortfoilo`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // JSON olarak gönderildiğini belirtin
        },
      });

      if (response.data.success) {
        setAlert("Model başarıyla eklendi");
        setAlertType(true);

        setTitle("");
        setArea("");
        setGroundFloorGrossArea("");
        setGroundFloorTerrace("");
        setGroundFloorPool("");
        setFirstFloorGrossArea("");
        setFirstFloorTerrace("");
        setRoomCount("");
        setFilter("");
        setMainPicture(null);
        setImages([]);
      } else {
        setAlert("Model ekleme başarısız");
        setAlertType(false);
      }
    } catch (err) {
      console.error(err);
      setAlert("Bir hata oluştu");
      setAlertType(false);
    }
  };

  return (
    <div className="card mb-0">
      <div className="card-body">
        <p className="text-center text-white fs-4 pt-5">Model Ekle</p>{" "}
        {/* Başlık güncellendi */}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xxl-6">
              <div className="mb-3">
                <label htmlFor="mainPicture" className="form-label text-white">
                  Ana Resim
                </label>
                <div className="mb-4">
                  <CldUploadWidget
                    uploadPreset="myuploadpreset"
                    onSuccess={handleMainUpload}
                    id="mainPicture"
                    required
                  >
                    {({ open }) => (
                      <button
                        type="button"
                        className="btn btn-primary rounded-2 text-white fs-5"
                        onClick={() => open()}
                      >
                        Ana Resmi Seçmek İçin Tıklayın
                      </button>
                    )}
                  </CldUploadWidget>
                </div>
                {mainPicture && (
                  <img
                    src={mainPicture}
                    alt="Ana Resim"
                    className="rounded-2"
                    style={{ width: "50%", marginTop: "30px" }}
                  />
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="images" className="form-label text-white">
                  Diğer Resimler
                </label>
                <div className="mb-3">
                  <CldUploadWidget
                    uploadPreset="myuploadpreset"
                    onSuccess={handleImagesUpload}
                    id="images"
                    required
                  >
                    {({ open }) => (
                      <button
                        type="button"
                        className="btn btn-primary rounded-2 text-white fs-5"
                        onClick={() => open()}
                      >
                        Diğer Resimleri Seçmek İçin Tıklayın
                      </button>
                    )}
                  </CldUploadWidget>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Diğer Resim ${index + 1}`}
                      className="rounded-2"
                      style={{ width: "calc(50% - 10px)", marginTop: "30px" }} // Her resmin genişliğini ayarlayın
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xxl-6">
              <div className="mb-3">
                <label htmlFor="title" className="form-label text-white">
                  Başlık
                </label>
                <input
                  className="form-control"
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="area" className="form-label text-white">
                  Alan
                </label>
                <input
                  className="form-control"
                  id="area"
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="groundFloorGrossArea"
                  className="form-label text-white"
                >
                  Zemin Kat Brüt Alan
                </label>
                <input
                  className="form-control"
                  id="groundFloorGrossArea"
                  type="number"
                  value={groundFloorGrossArea}
                  onChange={(e) => setGroundFloorGrossArea(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="groundFloorTerrace"
                  className="form-label text-white"
                >
                  Zemin Kat Teras
                </label>
                <input
                  className="form-control"
                  id="groundFloorTerrace"
                  type="number"
                  value={groundFloorTerrace}
                  onChange={(e) => setGroundFloorTerrace(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="groundFloorPool"
                  className="form-label text-white"
                >
                  Havuz
                </label>
                <input
                  className="form-control"
                  id="groundFloorPool"
                  type="number"
                  value={groundFloorPool}
                  onChange={(e) => setGroundFloorPool(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="firstFloorGrossArea"
                  className="form-label text-white"
                >
                  Birinci Kat Brüt Alan
                </label>
                <input
                  className="form-control"
                  id="firstFloorGrossArea"
                  type="text"
                  value={firstFloorGrossArea}
                  onChange={(e) => setFirstFloorGrossArea(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="firstFloorTerrace"
                  className="form-label text-white"
                >
                  Birinci Kat Teras ve Balkon Alanı
                </label>
                <input
                  className="form-control"
                  id="firstFloorTerrace"
                  type="number"
                  value={firstFloorTerrace}
                  onChange={(e) => setFirstFloorTerrace(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="roomCount" className="form-label text-white">
                  Oda Sayısı
                </label>
                <input
                  className="form-control"
                  id="roomCount"
                  type="text"
                  value={roomCount}
                  onChange={(e) => setRoomCount(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="filter" className="form-label text-white">
                  Filtre
                </label>
                <input
                  className="form-control"
                  id="filter"
                  type="text"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  required
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
                  Kayıt Yap
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
                      ? "alert alert-primary mt-5"
                      : "alert alert-danger mt-5"
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

export default AddForm;
