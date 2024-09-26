import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdmin = router.pathname.includes("/admin");
  return !isAdmin ? (
    <>
      <Header disable={true} />
      <Component {...pageProps} />
      <Footer disable={true} />
    </>
  ) : (
    <>
      <Header disable={false} />
      <Component {...pageProps} />
      <Footer disable={false} />
    </>
  );
}
