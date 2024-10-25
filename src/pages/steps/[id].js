import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useState } from "react";
import api from "@/services/api";

export async function getStaticPaths() {
  const res = await api.get("/steps/getSteps");

  const paths = res.data.steps.map((step) => ({
    params: { id: step.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const stepRes = await api.get(`/steps/getStep/${id}`);
  const allStepsRes = await api.get("/steps/getSteps");

  const data = stepRes.data.step;
  const steps = allStepsRes.data.steps;

  return { props: { data, steps } };
}

const Subheader = dynamic(() => import("@/components/Subheader"), {
  loading: () => <p>Loading Subheader...</p>,
});

export default function Steps({ data, steps }) {
  const router = useRouter();
  const [selectedStepId, setSelectedStepId] = useState(router.query.id);

  const handleModelClick = (stepId) => {
    setSelectedStepId(stepId);
    router.push(`/steps/${stepId}.html`);
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

      <Subheader title="YAPIM AŞAMALARI" subtitle="" link="#" />

      <div id="content">
        <div className="container">
          <div className="row">
            <div id="sidebar" className="col-md-3 wow fadeInUp">
              <ul id="services-list">
                {steps?.map((s, index) => (
                  <li
                    key={index}
                    className={selectedStepId === s.id ? "active" : ""}
                    onClick={() => handleModelClick(s.id)}
                  >
                    <a href="#">{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12 wow fadeInUp" data-wow-delay=".3s">
                  <ul className="list-group">
                    {data?.StepItems?.map((step, index) => (
                      <li
                        key={index}
                        className="list-group-item list-group-item-action list-group-item-dark"
                      >
                        {step.item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Script dosyalarını ekliyoruz */}
      <Script src="/assets/js/designesia.js" strategy="afterInteractive" />

      <Script src="/assets/js/rev-slider.js" strategy="afterInteractive" />
    </>
  );
}
