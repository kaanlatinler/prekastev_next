import Head from "next/head";
import Script from "next/script";
import api from "@/services/api";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Subheader = dynamic(() => import("@/components/Subheader"), {
  loading: () => <p>Loading Subheader...</p>,
});

const QuestionRow_black = dynamic(
  () => import("@/components/faq/QuestionRow_black"),
  {
    loading: () => <p>Loading QuestionRow_black...</p>,
  }
);

const QuestionRow_black2 = dynamic(
  () => import("@/components/faq/QuestionRow_black2"),
  {
    loading: () => <p>Loading QuestionRow_black...</p>,
  }
);

const QuestionRow_gray = dynamic(
  () => import("@/components/faq/QuestionRow_gray"),
  {
    loading: () => <p>Loading QuestionRow_gray...</p>,
  }
);

const More = dynamic(() => import("@/components/faq/More"), {
  loading: () => <p>Loading More...</p>,
});

export default function Faq() {
  const router = useRouter();
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    async function fetchFaqs() {
      try {
        const response = await api.get("/faqs/getFaqs");
        setFaqs(response.data.questions);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFaqs();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isFirstLoad = sessionStorage.getItem("isFirstLoad") !== "false";

      if (isFirstLoad) {
        sessionStorage.setItem("isFirstLoad", "false");

        const timer = setTimeout(() => {
          console.log("5 saniye oldu sayfa yenilendi");
          router.reload();
        }, 1000);

        return () => clearTimeout(timer);
      }
    }
  }, [router]);

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

      <Subheader title="SIK SORULAN SORULAR" subtitle="" />

      <div id="content" className="no-top no-bottom">
        <QuestionRow_black faqs={faqs} />
        <QuestionRow_gray faqs={faqs} />
        <QuestionRow_black2 faqs={faqs} />

        <More />
      </div>

      {/* Script dosyalarını ekliyoruz */}
      <Script src="/assets/js/plugins.js" strategy="lazyOnload" />
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
