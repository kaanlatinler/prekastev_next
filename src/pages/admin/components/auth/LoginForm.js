import { useState } from "react";
import Link from "next/link";
import api from "@/services/api";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      router.push("/admin");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="card mb-0">
      <div className="card-body">
        <p className="text-center text-white fs-4 pt-5">
          Admin Olarak Giriş Yap
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="UserEmail" className="form-label text-white">
              Eposta
            </label>
            <input
              type="email"
              className="form-control"
              id="UserEmail"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="UserPassword" className="form-label text-white">
              Şifre
            </label>
            <input
              type="password"
              className="form-control"
              id="UserPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="d-flex align-items-center justify-content-between mb-4">
            <Link href="/index">Şifremi Unuttum</Link>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
