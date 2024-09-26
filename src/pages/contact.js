import Head from "next/head";
import Script from "next/script";
import api from "@/services/api";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Subheader = dynamic(() => import("@/components/Subheader"), {
  loading: () => <p>Loading Subheader...</p>,
});

const Form = dynamic(() => import("@/components/contact/Form"), {
  loading: () => <p>Loading Form...</p>,
});

const Sidebar = dynamic(() => import("@/components/contact/Sidebar"), {
  loading: () => <p>Loading Sidebar...</p>,
});

const Map = dynamic(() => import("@/components/contact/Map"), {
  loading: () => <p>Loading Map...</p>,
});

export default function Contact() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    async function fetchModels() {
      try {
        const response = await api.get("/portfoilos/getPortfoilos");
        setModels(response.data.portfoilos);
      } catch (error) {
        console.error(error);
      }
    }

    fetchModels();
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

      <Subheader title="İLETİŞİM" subtitle="" />

      <div id="content" className="no-top">
        <Map />
        <div className="container">
          <div className="row">
            <Form models={models} />
            <Sidebar />
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
