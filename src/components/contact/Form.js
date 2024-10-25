import { useState, useEffect } from "react";
import axios from "axios";
import api from "@/services/api";

const Form = () => {
  const [formData, setFormData] = useState({
    areaSize: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    city: "", // Şehir
    heardFrom: "", // Nereden Duydu?
    floors: "", // Kaç Katlı?
    startDate: "", // Başlama Tarihi
  });

  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          "https://turkiyeapi.dev/api/v1/provinces"
        );
        setCities(response.data.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const translatedFormData = {
      ...formData,
      heardFrom:
        formData.heardFrom === "SosyalMedya" ? "Sosyal Medya" : "Sosyal Çevre",
      floors: formData.floors === "1" ? "1 Katlı" : "2 Katlı",
      startDate:
        formData.startDate === "w1"
          ? "1 Ay İçinde"
          : formData.startDate === "w6"
          ? "6 Ay İçinde"
          : formData.startDate === "after6"
          ? "6 Ay Sonrasında"
          : "Diğer",
    };

    try {
      const res = await api.post("/contacts/sendMail", translatedFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data.success) {
        alert("Form başarıyla gönderildi!");
      } else {
        alert("Form gönderilemedi");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Form gönderilirken bir hata oluştu");
    }
  };

  return (
    <div className="col-md-8">
      <form id="contact_form" onSubmit={handleSubmit}>
        <div id="step-1" className="row">
          <div className="col-md-6 mb10">
            <h4>
              <i className="fa-solid fa-question id-color"></i> Bizi Nereden
              Duydunuz?
            </h4>
            <select
              name="heardFrom"
              id="heardFrom"
              className="form-control"
              value={formData.heardFrom}
              onChange={handleChange}
            >
              <option value="" disabled>
                Bir seçenek seçin
              </option>
              <option value="SosyalMedya">Sosyal Medya</option>
              <option value="SosyalCevre">Sosyal Çevre</option>
            </select>
          </div>

          <div className="col-md-6 mb10">
            <h4>
              <i className="fa fa-arrows-alt id-color"></i>
              Toplam alan büyüklüğünü girin (m²)
            </h4>
            <div className="row">
              <div className="col-md-12">
                <input
                  type="number"
                  name="areaSize"
                  id="area-size"
                  className="form-control"
                  placeholder="Alan Büyüklüğü"
                  required
                  value={formData.areaSize}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h4>
              <i className="fa fa-tag id-color"></i>Şehir
            </h4>
            <select
              name="city"
              id="city"
              className="form-control"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="">Bir il seçin</option>
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-3 mb10">
            <h4>
              <i className="fa fa-home id-color"></i> Kaç Katlı Olacak?
            </h4>

            <select
              name="floors"
              id="floors"
              className="form-control"
              value={formData.floors}
              onChange={handleChange}
            >
              <option value="" disabled>
                Bir seçenek seçin
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="col-md-3 mb10">
            <h4>
              <i className="fa fa-home id-color"></i> Başlama Tarihi?
            </h4>

            <select
              name="startDate"
              id="startDate"
              className="form-control"
              value={formData.startDate}
              onChange={handleChange}
            >
              <option value="" disabled>
                Bir seçenek seçin
              </option>
              <option value="w1">1 Ay İçinde</option>
              <option value="w6">6 Ay İçinde</option>
              <option value="after6">6 Ay Sonrasında</option>
              <option value="other">Diğer</option>
            </select>
          </div>
        </div>

        <div id="step-2" className="row">
          <h4>
            <i className="fa fa-user id-color"></i> Detayları girin
          </h4>

          <div className="col-md-6">
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Adınız"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Eposta Adresiniz"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              placeholder="Telefon Numaranız"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <textarea
              name="message"
              id="message"
              className="form-control"
              placeholder="Mesajınız"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="col-md-12">
            <div className="g-recaptcha" data-sitekey="your-site-key"></div>
            <button type="submit" id="send_message" className="btn btn-line">
              Gönder
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
