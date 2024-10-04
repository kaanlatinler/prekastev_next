import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import Preloader from "@/components/Preloader";
import HeaderAdmin from "./admin/components/HeaderAdmin";
import FooterAdmin from "./admin/components/FooterAdmin";

import Script from "next/script";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdmin = router.pathname.includes("/admin");
  return !isAdmin ? (
    <>
      <Preloader />
      <Header disable={true} />
      <Component {...pageProps} />
      <Footer disable={true} />
    </>
  ) : (
    <>
      <HeaderAdmin />
      <Header disable={false} />
      <Component {...pageProps} />
      <Footer disable={false} />
      <FooterAdmin />
    </>
  );
}
