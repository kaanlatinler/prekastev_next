import React from "react";
import Link from "next/link";

const MyButton = React.forwardRef(({ href, name }, ref) => {
  return (
    <a href={href} ref={ref}>
      {name}
    </a>
  );
});

MyButton.displayName = "MyButton";

const Footer = ({ disable }) => {
  return (
    <footer className={disable ? "" : "d-none"}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-5">
            <img
              src="../../assets/images/yanuzun.png"
              width={200}
              className="logo-small img-fluid"
              alt="Prekast Ev Logo"
            />
            <br />
            Prekast Ev olarak , en güvenilir ve dayanıklı bina türlerinden biri
            olan prekast evlerin yapımını sunuyoruz. Betonarme ve duvar
            panelleri kullanarak hava koşulları ve zamanın etkileri gibi çeşitli
            dış etkenlere dayanabilecek dayanıklı yapılar yaratıyoruz.
          </div>

          <div className="col-lg-3">
            <h3>İLETİŞİM</h3>
            <div className="widget widget-address">
              <address>
                <span>
                  Gençlik, Fevzi Çakmak Cd. No:77, 07100 Muratpaşa/Antalya
                </span>
                <span>
                  <strong>Telefon:</strong> 0531 302 37 07{" "}
                </span>
                <span>
                  <strong>Email:</strong>
                  <Link
                    href="mailto:satis@prekastev.com"
                    passHref
                    legacyBehavior
                  >
                    <MyButton name={"satis@prekastev.com"} />
                  </Link>
                </span>
              </address>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="widget widget_recent_post">
              <h3>HİZMETLERİMİZ</h3>
              <ul>
                <li>
                  <Link href="/services.html" passHref legacyBehavior>
                    <MyButton name={"Arsa Keşfi"} />
                  </Link>
                </li>
                <li>
                  <Link href="/services.html" passHref legacyBehavior>
                    <MyButton name={"Ruhsat Projeleri"} />
                  </Link>
                </li>
                <li>
                  <Link href="/services.html" passHref legacyBehavior>
                    <MyButton name={"Elektrik Ve Otomasyon"} />
                  </Link>
                </li>
                <li>
                  <Link href="/services.html" passHref legacyBehavior>
                    <MyButton name={"Tüm Hizmetlerimiz"} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <img
              src="../../assets/images/tescil/tescil.png"
              className="img-fluid"
              alt="Tescil"
              style={{ maxWidth: "150px", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              &copy; Copyright {new Date().getFullYear()} - Prekastev Yiğit
              Yüceer Proje Yönetimi Markasıdır
            </div>

            <div className="col-md-6 text-right">
              <div className="social-icons">
                <a href="https://www.instagram.com/prekastev/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@YIGITYUCEER">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="https://www.linkedin.com/in/yigityuceer/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://linktr.ee/yigityuceer">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" id="back-to-top"></a>
    </footer>
  );
};

export default Footer;
