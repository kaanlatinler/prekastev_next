import Link from "next/link";
import React from "react";

const MyButton = React.forwardRef(({ href, name }, ref) => {
  return (
    <a href={href} ref={ref}>
      {name}
    </a>
  );
});

const LogoButton = React.forwardRef(({ href }, ref) => {
  return (
    <a href={href} ref={ref}>
      <img
        className="logo"
        src="/assets/images/yanuzun.png"
        width={200}
        height={60}
        alt="Logo"
      />
    </a>
  );
});

LogoButton.displayName = "LogoButton";

MyButton.displayName = "MyButton";

const Header = ({ disable }) => {
  return (
    <header className={disable ? "" : "d-none"}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="md-flex">
              {/* Logo */}
              <div id="logo">
                <Link href="/index.html" passHref legacyBehavior>
                  <LogoButton href="/" />
                </Link>
              </div>

              {/* Menü Butonu (Mobil İçin) */}
              <span id="menu-btn"></span>

              {/* Ana Menü */}
              <div>
                <nav className="md-flex">
                  <ul id="mainmenu">
                    <li>
                      <Link
                        href="https://www.instagram.com/prekastev/"
                        target="_blank"
                      >
                        İNSTAGRAM
                      </Link>
                    </li>
                    <li>
                      <Link href="/index.html" passHref legacyBehavior>
                        <MyButton name={"HOME"} />
                      </Link>
                    </li>
                    <li>
                      <Link href="/models.html" passHref legacyBehavior>
                        <MyButton name={"MODELLER"} />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services.html" passHref legacyBehavior>
                        <MyButton name={"HİZMETLER"} />
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq.html" passHref legacyBehavior>
                        <MyButton name={"SSS"} />
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact.html" passHref legacyBehavior>
                        <MyButton name={"İLETİŞİM"} />
                      </Link>
                    </li>
                    <li>
                      <Link href="/founder.html" passHref legacyBehavior>
                        <MyButton name={"KURUCUMUZ"} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://drive.google.com/file/d/17sjSQYnSRMC7rn8dUtY2cQV8_C-rLANr/view?usp=sharing"
                        target="_blank"
                      >
                        KATALOG İNDİR
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
