import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "@/services/api";

export default function Questions() {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    setToken(jwtToken);
    if (!jwtToken) {
      alert("Giriş yapmalısınız");
      router.push("/admin/login");
    }

    const getQuestions = async () => {
      try {
        const response = await api.get("/faqs/getFaqs", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        setQuestions(response.data.questions);
      } catch (err) {
        console.log(err);
      }
    };
    getQuestions();
  }, []);

  // Cevapları kısaltmak için fonksiyon
  const shortenText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const handleDelete = async (qId) => {
    if (confirm("Bu Soruyu silmek istediğinize emin misiniz?")) {
      try {
        await api.delete(`/faqs/deleteFaq/${qId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuestions(questions.filter((q) => q.id !== qId));
        alert("Soruyu başarıyla silindi");
      } catch (err) {
        console.log(err);
        alert("Soruyu silinirken bir hata oluştu");
      }
    }
  };

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/assets/images/logo.png"
          type="image/gif"
          sizes="16x16"
        />
        <title>Prekast Ev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Archi is best selling interior design website template with responsive stunning design"
        />
        <meta
          name="keywords"
          content="architecture,building,business,bootstrap,creative,exterior design,furniture design,gallery,garden design,house,interior design,landscape design,multipurpose,onepage,portfolio,studio"
        />
        <meta name="author" content="" />
      </Head>

      <div className="m-5 p-5">
        <section className="fullwidthbanner-container pt-5">
          <div id="content" className="no-bottom no-top mt-5">
            <div className="row mb-5">
              <div className="col-lg-12">
                <h1 className="text-center">Sorular</h1>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-12">
                <Link className="btn btn-primary" href="/admin/addQuestion">
                  Soru Ekle
                </Link>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12 d-flex align-items-stretch table-responsive">
                <table className="table table-dark table-hover border">
                  <thead>
                    <tr className="table-light">
                      <th scope="col">Soru</th>
                      <th scope="col">Cevap</th>
                      <th className="table-warning text-center" scope="col">
                        Düzenle
                      </th>
                      <th className="table-danger text-center" scope="col">
                        Sil
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions.map((q, index) => (
                      <tr key={index}>
                        <th className="p-3" scope="row">
                          {q.question}
                        </th>
                        <td className="p-3">
                          {shortenText(q.answer, 100)}{" "}
                          {/* Burada 100 karakter sınırını kullanıyoruz */}
                        </td>
                        <td className="text-center p-3">
                          <Link href={`/admin/question/${q.id}`}>
                            <span className="material-symbols-outlined">
                              edit_square
                            </span>
                          </Link>
                        </td>
                        <td className="text-center p-3">
                          <span
                            className="material-symbols-outlined"
                            style={{ cursor: "pointer", color: "red" }}
                            onClick={() => handleDelete(q.id)}
                          >
                            delete
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Script dosyalarını ekliyoruz */}
      <Script src="/assets/js/plugins.js" strategy="lazyOnload" />
      <Script src="/assets/js/designesia.js" strategy="lazyOnload" />
      <Script
        src="/assets/rs-plugin/js/jquery.themepunch.plugins.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/rs-plugin/js/jquery.themepunch.revolution.min.js"
        strategy="lazyOnload"
      />

      <Script src="/assets/js/cookies.js" strategy="lazyOnload" />
      <Script src="/assets/js/rev-slider.js" strategy="lazyOnload" />
      <Script src="/assets/js/menu.js" strategy="lazyOnload" />
    </>
  );
}
