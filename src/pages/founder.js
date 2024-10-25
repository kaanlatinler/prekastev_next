import Head from "next/head";
import api from "@/services/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Script from "next/script";

const Subheader = dynamic(() => import("@/components/Subheader"), {
  loading: () => <p>Loading Subheader...</p>,
});

const VideoModal = dynamic(() => import("@/components/home/VideoModal"), {
  loading: () => <p>Loading VideoModal...</p>,
});

export default function Founder() {
  const router = useRouter();
  const [founder, setFounder] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFounder() {
      try {
        const response = await api.get("/founders/getFounders");
        setFounder(response.data.founders);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchFounder();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <p>Loading content...</p>;
  }

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

      <Subheader title="KURUCUMUZ" subtitle="" />

      <div id="content" className="no-top no-bottom">
        <section id="section-about-us-2" className="side-bg no-padding">
          <div
            className="image-container col-md-5 pull-left"
            data-delay="0"
          ></div>

          <div className="container">
            <div className="row">
              <div
                className="col-xxl-6 offset-lg-6 offset-md-12 col-lg-6 col-md-12"
                data-animation="fadeInRight"
                data-delay="200"
              >
                {founder.map((f, index) => (
                  <div key={index} className="inner-padding">
                    <h2>
                      {f.name} {f.surname}
                    </h2>
                    <br />
                    <h3>
                      <span className="id-color">Kurucu</span> & {f.title}
                    </h3>

                    <p className="intro">{f.paragraph}</p>
                    {f.description}
                  </div>
                ))}
                <div className="clearfix"></div>
                <Link
                  className="btn btn-primary w-100"
                  href="#"
                  onClick={openModal} // Modalı açmak için tıklama olayı
                >
                  TANITIM VİDEOSU
                </Link>
              </div>
            </div>
            <div className="row  offset-lg-6 offset-md-12 mt-5 mb-5">
              <div className="col-xxl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-center">
                <a href="https://yigityuceer.com">
                  <i className="bi bi-link-45deg fs-5"></i>
                </a>
              </div>
              <div className="col-xxl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-center">
                <a href="https://www.instagram.com/muhyigityuceer">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
              <div className="col-xxl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-center">
                <a href="https://www.youtube.com/@YIGITYUCEER">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
              <div className="col-xxl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-center">
                <a href="https://x.com/MuhYigitYuceer">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </div>
              <div className="col-xxl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-center">
                <a href="https://www.tiktok.com/@yigityuceeryy">
                  <i className="bi bi-tiktok"></i>
                </a>
              </div>
              <div className="col-xxl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-center">
                <a href="https://www.facebook.com/yigityuceer/">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal Bileşeni */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />
      <Script src="/assets/js/designesia.js" strategy="afterInteractive" />

    </>
  );
}
