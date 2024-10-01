import { useState } from "react";
import Link from "next/link";
import api from "@/services/api"; // Eğer api servisiniz bu şekildeyse, doğru yolu kontrol edin

const AddForm = ({ token }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert("");

    try {
      const response = await api.post(
        `/faq/addQuestion`, // Soruyu eklemek için doğru endpoint
        { question, answer },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        setAlert("Soru başarıyla eklendi");
        setAlertType(true);
      } else {
        setAlert("Soru ekleme başarısız");
        setAlertType(false);
      }
    } catch (err) {
      console.log(err);
      setAlert("Bir hata oluştu");
      setAlertType(false);
    }
  };

  return (
    <div className="card mb-0">
      <div className="card-body">
        <p className="text-center text-white fs-4 pt-5">Soru Ekle</p>{" "}
        {/* Başlık güncellendi */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="question" className="form-label text-white">
              Soru
            </label>
            <textarea
              className="form-control"
              id="question"
              rows="3"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="answer" className="form-label text-white">
              Cevap
            </label>
            <textarea
              className="form-control"
              id="answer"
              rows="5"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>
          {alert && (
            <div
              className={
                alertType ? "alert alert-primary" : "alert alert-danger"
              }
            >
              {alert}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
          >
            Kayıt Yap
          </button>
        </form>
        <Link
          className="btn btn-secondary w-100 py-8 fs-4 mb-4 rounded-2"
          href="/admin/questions"
        >
          Geri Dön
        </Link>
      </div>
    </div>
  );
};

export default AddForm;
