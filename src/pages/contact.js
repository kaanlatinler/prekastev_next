import Head from "next/head";
import api from "@/services/api";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchModels() {
      try {
        const response = await api.get("/portfoilos/getPortfoilos");
        setModels(response.data.portfoilos);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchModels();
  }, []);

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
    </>
  );
}
