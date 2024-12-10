import React, { useState } from "react";
import api from "@/services/api";

const ContractorForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    taxNumber: "",
    website: "",
    industry: "",
    serviceType: "",
    otherServiceType: "",
    officeLocation: "",
    contactPersonName: "",
    contactEmail: "",
    city: "",
    officePhone: "",
    mobilePhone: "",
    servicesProvided: "",
    topClientsProjects: "",
    reasonToWorkWithUs: "",
    addedValue: "",
    message: "",
  });

  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // "serviceType" alanı değiştiğinde "Diğer" seçimini kontrol et
    if (name === "serviceType") {
      setFormData({
        ...formData,
        [name]: value,
        otherServiceType: value === "Diğer" ? formData.otherServiceType : "", // Diğer seçilmezse temizle
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/contacts/sendMailContractor", formData);
      if (response.data.success) {
        alert("Başvurunuz başarıyla gönderildi.");
        setFormData({
          companyName: "",
          taxNumber: "",
          website: "",
          industry: "",
          serviceType: "",
          otherServiceType: "",
          officeLocation: "",
          contactPersonName: "",
          contactEmail: "",
          city: "",
          officePhone: "",
          mobilePhone: "",
          servicesProvided: "",
          topClientsProjects: "",
          reasonToWorkWithUs: "",
          addedValue: "",
          message: "",
        });
        setShowOtherInput(false);
      } else {
        alert("Bir hata oluştu.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Bir hata oluştu.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Firma Bilgileri */}
      <div className="mb-3">
        <label>Firma Ticari Adı</label>
        <input
          type="text"
          className="form-control"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Vergi Kimlik Numarası (VKN)</label>
        <input
          type="text"
          className="form-control"
          name="taxNumber"
          value={formData.taxNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Web Sitesi</label>
        <input
          type="text"
          className="form-control"
          name="website"
          value={formData.website}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Sektör Türü</label>
        <input
          type="text"
          className="form-control"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label>Hizmet Türü</label>
        <select
          className="form-select"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
        >
          <option value="">Seçiniz</option>
          <option value="Alt Yüklenici">Alt Yüklenici</option>
          <option value="Tedarikçi">Tedarikçi</option>
          <option value="Danışman">Danışman</option>
          <option value="Diğer">Diğer</option>
        </select>
      </div>

      {/* "Diğer" seçilirse ek input alanı */}
      {formData.serviceType === "Diğer" && (
        <div className="mb-3">
          <label>Diğer Hizmet Türü</label>
          <input
            type="text"
            className="form-control"
            name="otherServiceType"
            value={formData.otherServiceType}
            onChange={handleChange}
            required
          />
        </div>
      )}

      {/* İletişim Bilgileri */}
      <div className="mb-3">
        <label>Ofis Konumu</label>
        <input
          type="text"
          className="form-control"
          name="officeLocation"
          value={formData.officeLocation}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>İletişim Kişisinin Adı</label>
        <input
          type="text"
          className="form-control"
          name="contactPersonName"
          value={formData.contactPersonName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>İletişim Email Adresi</label>
        <input
          type="email"
          className="form-control"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Şehir</label>
        <input
          type="text"
          className="form-control"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label>Ofis Telefonu</label>
        <input
          type="text"
          className="form-control"
          name="officePhone"
          value={formData.officePhone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label>Cep Telefonu</label>
        <input
          type="text"
          className="form-control"
          name="mobilePhone"
          value={formData.mobilePhone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label>Sunmuş Olduğunuz Hizmetler</label>
        <textarea
          className="form-control"
          name="servicesProvided"
          value={formData.servicesProvided}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="mb-3">
        <label>
          Son 5 yıl içinde en önemli 3 müşterinizi ve/veya en önemli 3 projenizi
          sıralayın{" "}
        </label>
        <textarea
          className="form-control"
          name="topClientsProjects"
          value={formData.topClientsProjects}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="mb-3">
        <label>
          Prekastev ile birlikte çalışmak istemenizin nedenini kısaca açıklar
          mısınız
        </label>
        <textarea
          className="form-control"
          name="reasonToWorkWithUs"
          value={formData.reasonToWorkWithUs}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="mb-3">
        <label>Firmanızın sunduğu katma değer nedir</label>
        <textarea
          className="form-control"
          name="addedValue"
          value={formData.addedValue}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="mb-3">
        <label>Mesajınız</label>
        <textarea
          className="form-control"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary rounded">
        Başvur
      </button>
    </form>
  );
};

export default ContractorForm;
