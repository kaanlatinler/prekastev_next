import Head from "next/head";
import api from "@/services/api";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Script from "next/script";

const Subheader = dynamic(() => import("@/components/Subheader"), {
  loading: () => <p>Loading Subheader...</p>,
});

const ServiceCard = dynamic(() => import("@/components/service/ServiceCard"), {
  loading: () => <p>Loading ServiceCard...</p>,
});

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await api.get("/services/getServices");
        setServices(response.data.services);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
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

      <Subheader title="HİZMETLERİMİZ" subtitle="" />

      <div id="content">
        <div className="container">
          <div className="row mb-5">
            {services.map((service, index) =>
              index < 4 ? <ServiceCard key={index} service={service} /> : null
            )}
          </div>
          <div className="row">
            {services.map((service, index) =>
              index >= 4 ? <ServiceCard key={index} service={service} /> : null
            )}
          </div>
        </div>
      </div>
      <Script src="/assets/js/designesia.js" strategy="afterInteractive" />

    </>
  );
}
