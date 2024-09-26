// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="/assets/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap"
        />
        <link href="/assets/css/plugins.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link href="/assets/css/color.css" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/bg.css" />
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
      </Head>
      <body id="homepage">
        <div id="wrapper">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
