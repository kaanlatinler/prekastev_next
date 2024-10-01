import Head from "next/head";
import Script from "next/script"; // Next.js Script bileşenini ekliyoruz
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "@/services/api";
import UpdateForm from "../components/question/UpdateForm";

export default function Question() {
  const router = useRouter();
  const [question, setQuestion] = useState([]);
  const [token, setToken] = useState("");
  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    setToken(jwtToken);
    if (!jwtToken) {
      alert("Giriş yapmalısınız");
      router.push("/admin/login");
    }

    const getQuestion = async () => {
      try {
        const response = await api.get(`/faqs/getFaq/${router.query.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuestion(response.data.question);
      } catch (err) {
        console.log(err);
      }
    };
    getQuestion();
  }, []);

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

      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
              <div className="col-md-8 col-lg-6 col-xxl-3">
                <UpdateForm q={question} token={token} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Script dosyalarını ekliyoruz */}
      <Script src="../../js/plugins.js" strategy="lazyOnload" />
      <Script src="../../js/designesia.js" strategy="lazyOnload" />
      <Script src="../../js/menu.js" strategy="lazyOnload" />
      <Script
        src="../../rs-plugin/js/jquery.themepunch.plugins.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="../../rs-plugin/js/jquery.themepunch.revolution.min.js"
        strategy="lazyOnload"
      />
      <Script src="../../js/cookies.js" strategy="lazyOnload" />
      <Script src="../../js/rev-slider.js" strategy="lazyOnload" />
    </>
  );
}
