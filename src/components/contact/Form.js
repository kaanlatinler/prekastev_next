import { useState, useEffect } from "react";
import axios from "axios";
import api from "@/services/api";

const Form = ({ models }) => {
  const [formData, setFormData] = useState({
    propertyType: "MODEL A",
    areaSize: "",
    unitSize: "sqft",
    name: "",
    email: "",
    phone: "",
    message: "",
    city: "", // İli buraya kaydediyoruz
  });

  const [cities, setCities] = useState([]);

  // API'den illeri almak için useEffect kullanıyoruz
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          "https://turkiyeapi.dev/api/v1/provinces"
        );
        setCities(response.data.data); // API'den gelen illeri setCities ile güncelliyoruz
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

    try {
      const res = await api.post("/contacts/sendMail", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data.success) {
        alert("Form successfully submitted!");
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form");
    }
  };

  return (
    <div className="col-md-8">
      <form id="contact_form" onSubmit={handleSubmit}>
        <div id="step-1" className="row">
          <div className="col-md-12 mb30">
            <h4>
              <i className="fa fa-home id-color"></i> Seçtiğiniz mülk tipi
              nedir?
            </h4>

            <div className="de_form de_radio">
              {models.map((model, index) => (
                <div key={index} className="radio-img">
                  <input
                    id={model.id}
                    name="propertyType"
                    type="radio"
                    value={model.title}
                    checked={formData.propertyType === model.title}
                    onChange={handleChange}
                  />
                  <label htmlFor={model.id}>
                    <img
                      src={model.mainPicture}
                      alt={model.title}
                      width={100}
                      height={100}
                    />
                    {model.title}
                  </label>
                </div>
              ))}
            </div>
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
