import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useState } from "react";
import api from "@/services/api";

export async function getStaticPaths() {
  const res = await api.get("/portfoilos/getPortfoilos");

  const paths = res.data.portfoilos.map((model) => ({
    params: { id: model.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const modelRes = await api.get(`/portfoilos/getPortfoilo/${id}`);
  const allModelsRes = await api.get("/portfoilos/getPortfoilos");

  const data = modelRes.data.portfoilo;
  const models = allModelsRes.data.portfoilos;

  return { props: { data, models } };
}

const Subheader = dynamic(() => import("@/components/Subheader"), {
  loading: () => <p>Loading Subheader...</p>,
});

export default function Models({ data, models }) {
  const router = useRouter();
  const [selectedModelId, setSelectedModelId] = useState(router.query.id);

  const handleModelClick = (modelId) => {
    setSelectedModelId(modelId);
    router.push(`/models/${modelId}.html`);
  };

  if (router.isFallback) {
    return <p>Loading...</p>;
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
        <meta
          name="description"
          content="Prekast Ev, Yiğit Yüceer Proje Yönetimi Markasıdır. Prekast beton teknolojisi..."
        />
      </Head>

      <Subheader title="MODELLER" subtitle="Model Details" link="models" />

      <div id="content">
        <div className="container">
          <div className="row">
            <div id="sidebar" className="col-md-3 wow fadeInUp">
              <ul id="services-list">
                {models?.map((m, index) => (
                  <li
                    key={index}
                    className={selectedModelId === m.id ? "active" : ""}
                    onClick={() => handleModelClick(m.id)}
                  >
                    <a href="#">{m.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12 wow fadeInUp" data-wow-delay=".3s">
                  <div className="project-info">
                    <h2>{data?.area}m² Arsa İçin</h2>

                    <div className="details">
                      <div className="info-text">
                        <span className="title">
                          Zemin Kat Brüt Alan &nbsp;
                        </span>
                        <span className="val">
                          {data?.groundFloorGrossArea}m²
                        </span>
                      </div>

                      <div className="info-text">
                        <span className="title">Zemin Kat Teras &nbsp;</span>
                        <span className="val">
                          {data?.groundFloorTerrace}m²
                        </span>
                      </div>

                      <div className="info-text">
                        <span className="title">Havuz </span>
                        <span className="val">{data?.groundFloorPool}m²</span>
                      </div>

                      <div className="info-text">
                        <span className="title">1.Kat Brüt Alan &nbsp;</span>
                        <span className="val">
                          {data?.firstFloorGrossArea}m²
                        </span>
                      </div>

                      <div className="info-text">
                        <span className="title">
                          1.Kat Toplam Teras Alanı &nbsp;
                        </span>
                        <span className="val">{data?.firstFloorTerrace}m²</span>
                      </div>

                      <div className="info-text"></div>
                      <span className="title">Oda Sayısı </span>
                      <span className="val">{data?.roomCount}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {data?.Images?.map((image, index) => (
                  <div
                    key={index}
                    className="col-md-6 pic-services wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <img src={image.url} className="img-responsive" alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Script dosyalarını ekliyoruz */}
      <Script src="/assets/js/plugins.js" strategy="lazyOnload" />
      <Script src="/assets/js/loader.js" strategy="lazyOnload" />
      <Script src="/assets/js/designesia.js" strategy="lazyOnload" />
      <Script src="/assets/js/menu.js" strategy="lazyOnload" />
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
    </>
  );
}
