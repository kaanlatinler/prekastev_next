import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import api from "@/services/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Subheader = dynamic(() => import("@/components/Subheader"), {
  loading: () => <p>Loading Subheader...</p>,
});

const HouseModelCol3 = dynamic(
  () => import("@/components/models/HouseModel_col3"),
  {
    loading: () => <p>Loading House Models</p>,
  }
);

const HouseModelCol2 = dynamic(
  () => import("@/components/models/HouseModel_col2"),
  {
    loading: () => <p>Loading House Models</p>,
  }
);

export default function Models() {
  const router = useRouter();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchModels() {
      try {
        const res = await api.get("/portfoilos/getPortfoilos");
        setModels(res.data.portfoilos);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchModels();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isFirstLoad = sessionStorage.getItem("isFirstLoad") !== "false";

      if (!loading && isFirstLoad) {
        sessionStorage.setItem("isFirstLoad", "false");

        const timer = setTimeout(() => {
          console.log("5 saniye oldu sayfa yenilendi");
          router.reload();
        }, 1000);

        return () => clearTimeout(timer);
      }
    }
  }, [loading, router]);

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

        <meta
          name="description"
          content="Prekast Ev, Yiğit Yüceer Proje Yönetimi Markasıdır.
    Prekast beton teknolojisi, fabrikada önceden üretilen ve kalite kontrol testlerinden geçirilen yapı elemanlarının hızlı, dayanıklı ve çevre dostu inşaat projelerinde kullanılmasını sağlar. Bu yöntem, inşaat süresini kısaltırken yüksek kalite ve tasarım esnekliği sunar."
        />
        <meta
          name="keywords"
          content="Antalya villa yapımı fiyatları, Antalya lüks villa yaptırmak, Antalya villa projeleri, Antalya müstakil ev yaptırmak, Villa mimarı Antalya, Antalya arsa fiyatları, Antalya modern villa tasarımları, Antalya havuzlu villa yaptırmak, Villa inşaat firmaları Antalya, Antalya villa yapımı maliyeti, Antalya villa yaptırmak ne kadar tutar, Antalya villa yapımı en iyi bölgeler, Antalya villa yapımı gerekli izinler, Antalya villa yapan inşaat firmaları, Antalya arsa bulma, Antalya müstakil ev yaptırmak mantıklı mı, Antalya villa maliyetleri, Antalya modern villa mimarları, Antalya villa yapımı dikkat edilmesi gerekenler, Antalya villa projeleri örnekleri, Antalya villa inşaat süreçleri, Antalya enerji verimli villa yapımı, Antalya çevre dostu villa tasarımları, Antalya akıllı ev sistemleri, Antalya villa inşaat ruhsatı, Antalya lüks villa mimarları, Antalya sürdürülebilir villa projeleri, Antalya villa yapımı son teknolojiler, İzmir villa yapımı, Muğla villa yapımı, Aydın villa yapımı, Denizli villa yapımı, Burdur villa yapımı, Isparta villa yapımı, Çanakkale villa yapımı, Türkiye villa ev yaptırmak, villa maliyeti, arsa fiyatı, havuzlu modern villa, inşaat şirketi, müteahhit, mimar, Döşemealtı, Korkuteli, Kepez, Kemer, Alanya, Manavgat, Kaş, Kumluca satılık villa"
        />

        <meta name="author" content="Yiğit Yüceer İnşaat Mühendisi" />
      </Head>

      <Subheader title="MODELLER" subtitle="" />

      <div id="content">
        <div className="container">
          <div className="row mb-5">
            {models.map((model, index) =>
              index < 3 ? <HouseModelCol3 key={index} model={model} /> : null
            )}
          </div>

          <div className="row">
            {models.map((model, index) =>
              index >= 3 ? <HouseModelCol2 key={index} model={model} /> : null
            )}
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
