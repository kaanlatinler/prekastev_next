import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/services/api";
import { CldUploadWidget } from "next-cloudinary";

const UpdateForm = ({ model = {}, token }) => {
  // Varsayılan değerlerle state'leri başlat
  const [formData, setFormData] = useState({
    title: "",
    area: "",
    groundFloorGrossArea: "",
    groundFloorTerrace: "",
    groundFloorPool: "",
    firstFloorGrossArea: "",
    firstFloorTerrace: "",
    roomCount: "",
    filter: "",
    mainPicture: "",
    images: [],
  });
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState(false);

  // Model prop'u değiştiğinde form verilerini güncelle
  useEffect(() => {
    if (model && Object.keys(model).length > 0) {
      setFormData({
        title: model.title || "",
        area: model.area || "",
        groundFloorGrossArea: model.groundFloorGrossArea || "",
        groundFloorTerrace: model.groundFloorTerrace || "",
        groundFloorPool: model.groundFloorPool || "",
        firstFloorGrossArea: model.firstFloorGrossArea || "",
        firstFloorTerrace: model.firstFloorTerrace || "",
        roomCount: model.roomCount || "",
        filter: model.filter || "",
        mainPicture: model.mainPicture || "",
        images: model.Images || [],
      });
    }
  }, [model]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleMainUpload = (data) => {
    if (data && data.event === "success") {
      setFormData((prev) => ({
        ...prev,
        mainPicture: data.info.secure_url,
      }));
    }
  };

  const handleImagesUpload = (data) => {
    if (data && data.event === "success") {
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, data.info.secure_url],
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!model || !model.id) {
      setAlert("Model ID bulunamadı");
      setAlertType(false);
      return;
    }

    try {
      const response = await api.put(
        `/portfoilos/updatePortfoilo/${model.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setAlert("Model başarıyla güncellendi");
        setAlertType(true);
      } else {
        setAlert("Model güncelleme başarısız");
        setAlertType(false);
      }
    } catch (err) {
      console.error(err);
      setAlert("Bir hata oluştu");
      setAlertType(false);
    }
  };

  // Eğer token yoksa veya geçersizse, bir hata mesajı göster
  if (!token) {
    return (
      <div className="alert alert-danger">
        Oturum bilgisi bulunamadı. Lütfen tekrar giriş yapın.
      </div>
    );
  }

  return (
    <div className="card mb-0">
      <div className="card-body">
        <p className="text-center text-white fs-4 pt-5">Model Güncelle</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xxl-6">
              {/* Ana Resim bölümü */}
              <div className="mb-3">
                <label htmlFor="mainPicture" className="form-label text-white">
                  Ana Resim
                </label>
                <div className="mb-4">
                  <CldUploadWidget
                    uploadPreset="myuploadpreset"
                    onSuccess={handleMainUpload}
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
                {formData.mainPicture && (
                  <img
                    src={formData.mainPicture}
                    alt="Ana Resim"
                    className="rounded-2"
                    style={{ width: "50%", marginTop: "30px" }}
                  />
                )}
              </div>

              {/* Diğer Resimler bölümü */}
              <div className="mb-3">
                <label htmlFor="images" className="form-label text-white">
                  Diğer Resimler
                </label>
                <div className="mb-3">
                  <CldUploadWidget
                    uploadPreset="myuploadpreset"
                    onSuccess={handleImagesUpload}
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
                  {formData.images.map((img, index) => (
                    <img
                      key={index}
                      src={typeof img === "string" ? img : img.url}
                      alt={`Diğer Resim ${index + 1}`}
                      className="rounded-2"
                      style={{ width: "calc(50% - 10px)", marginTop: "30px" }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xxl-6">
              {/* Form alanları */}
              {Object.entries(formData).map(([key, value]) => {
                if (key !== "mainPicture" && key !== "images") {
                  return (
                    <div className="mb-3" key={key}>
                      <label htmlFor={key} className="form-label text-white">
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/([A-Z])/g, " $1")}
                      </label>
                      <input
                        className="form-control"
                        id={key}
                        type={typeof value === "number" ? "number" : "text"}
                        value={value}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  );
                }
                return null;
              })}

              {/* Butonlar */}
              <div
                className="btn-group btn-group-lg d-flex"
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
                >
                  Geri Dön
                </Link>
              </div>

              {/* Alert mesajı */}
              {alert && (
                <div
                  className={`alert ${
                    alertType ? "alert-primary" : "alert-danger"
                  } mt-5`}
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
