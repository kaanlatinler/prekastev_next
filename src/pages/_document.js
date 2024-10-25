import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <link
          href="/assets/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap"
        />
        <link href="/assets/css/plugins.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/style.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/color.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="/assets/css/bg.css" type="text/css" />
        <link
          rel="stylesheet"
          href="/assets/css/colors/yellow.css"
          id="colors"
        />
        <link rel="stylesheet" href="/assets/rs-plugin/css/settings.css" />
        <link rel="stylesheet" href="/assets/css/rev-settings.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        ></link>
      </Head>
      <body id="homepage">
        <div id="wrapper">
          <Main />
          <NextScript />
        </div>
        {/* Script dosyalarını ekliyoruz */}
        <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
        <Script src="/assets/js/designesia.js" strategy="beforeInteractive" />
        <Script
          src="/assets/rs-plugin/js/jquery.themepunch.plugins.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/rs-plugin/js/jquery.themepunch.revolution.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/cookies.js" strategy="beforeInteractive" />
        <Script src="/assets/js/menu.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
