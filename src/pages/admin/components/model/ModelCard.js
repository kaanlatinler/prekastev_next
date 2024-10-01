import Link from "next/link";
import { useRouter } from "next/router";
import api from "@/services/api";

const ModelCard = ({ model, token }) => {
  const router = useRouter();

  const handelDelete = async () => {
    const response = await api.delete(
      `/portfoilos/deletePortfoilo/${model.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.success) {
      alert("Model başarıyla silindi");
      router.reload();
    } else {
      alert("Model silinirken bir hata oluştu");
      router.reload();
    }
  };

  const handleEdit = () => {
    sessionStorage.setItem("modelId", model.id);
    router.push(`/admin/model/${model.id}`);
  };

  return (
    <div className="col-lg-4">
      <div className="card text-white">
        <img
          src={model.mainPicture}
          className="card-img-top"
          alt={model.title}
        />
        <div className="card-body">
          <h5 className="card-title mb-3">{model.title}</h5>
          <div className="d-flex justify-content-between">
            <button
              onClick={handleEdit}
              className="btn btn-outline-warning btn-lg me-3"
            >
              Düzenle
            </button>
            <button
              onClick={handelDelete}
              className="btn btn-outline-danger btn-lg"
            >
              Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
