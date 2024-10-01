import Head from "next/head";
import Script from "next/script"; // Next.js Script bileşenini ekliyoruz
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    }
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

      <div className="mt-5 pt-5">
        <section className="fullwidthbanner-container pt-5">
          <div id="content" className="no-bottom no-top mt-5">
            <div className="row px-5">
              <div className="col-sm-4 mb-5">
                <div className="card border border-warning rounded-3 bg-black text-white">
                  <div className="card-body">
                    <h5 className="card-title">KULLANICILAR</h5>
                    <p className="card-text">
                      Kayıtlı kullanıcılarınızı görüntüleyebilir,
                      düzenleyebilir, silebilir ve ekleyebilirsiniz.
                    </p>
                    <Link
                      href="/admin/users"
                      className="btn btn-primary rounded-1"
                    >
                      Kullanıcılar
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-5">
                <div className="card border border-warning rounded-3 bg-black text-white">
                  <div className="card-body">
                    <h5 className="card-title">SORULAR</h5>
                    <p className="card-text">
                      Soruları görüntüleyebilir, düzenleyebilir, silebilir ve
                      ekleyebilirsiniz.
                    </p>
                    <Link
                      href="/admin/questions"
                      className="btn btn-primary rounded-1"
                    >
                      Sorular
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-5">
                <div className="card border border-warning rounded-3 bg-black text-white">
                  <div className="card-body">
                    <h5 className="card-title">MODELLER</h5>
                    <p className="card-text">
                      Modelleri görüntüleyebilir, düzenleyebilir, silebilir ve
                      ekleyebilirsiniz.
                    </p>
                    <Link
                      href="/admin/models"
                      className="btn btn-primary rounded-1"
                    >
                      Modeller
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row px-5">
              <div className="col-sm-3 mb-5">
                <div className="card border border-warning rounded-3 bg-black text-white">
                  <div className="card-body">
                    <h5 className="card-title">ADIMLAR</h5>
                    <p className="card-text">
                      Adımları görüntüleyebilir, düzenleyebilir, silebilir ve
                      ekleyebilirsiniz.
                    </p>
                    <Link
                      href="/admin/steps"
                      className="btn btn-primary rounded-1"
                    >
                      Adımlar
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 mb-5">
                <div className="card border border-warning rounded-3 bg-black text-white">
                  <div className="card-body">
                    <h5 className="card-title">SLIDER</h5>
                    <p className="card-text">
                      Sliderı görüntüleyebilir, düzenleyebilir, silebilir ve
                      ekleyebilirsiniz.
                    </p>
                    <Link
                      href="/admin/slider"
                      className="btn btn-primary rounded-1"
                    >
                      Slider
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 mb-5">
                <div className="card border border-warning rounded-3 bg-black text-white">
                  <div className="card-body">
                    <h5 className="card-title">HAKKIMDA</h5>
                    <p className="card-text">
                      Hakkımda sayfasını görüntüleyebilir, düzenleyebilir,
                      silebilir ve ekleyebilirsiniz.
                    </p>
                    <Link
                      href="/admin/about"
                      className="btn btn-primary rounded-1"
                    >
                      Hakkımda
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 mb-5">
                <div className="card border border-warning rounded-3 bg-black text-white">
                  <div className="card-body">
                    <h5 className="card-title">KURUCU</h5>
                    <p className="card-text">
                      Kurucu sayfasını görüntüleyebilir, düzenleyebilir,
                      silebilir ve ekleyebilirsiniz.
                    </p>
                    <Link
                      href="/admin/founder"
                      className="btn btn-primary rounded-1"
                    >
                      Kurucu
                    </Link>
                  </div>
                </div>
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
