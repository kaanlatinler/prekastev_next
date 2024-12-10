import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import ContractorModal from "./home/ContractorModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false); // Modalın açık olup olmadığını kontrol etmek için durum ekle

  const handleLinkClick = () => {
    setIsModalOpen(true); // Modalı aç
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Modalı kapat
  };
  return (
    <header className="header-custom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12 text-center">
            <div id="logo">
              <Link href="/index.html" passHref legacyBehavior>
                <LogoButton href="/" />
              </Link>
            </div>

            <span id="menu-btn"></span>
          </div>

          <div className="col-lg-4 sm-hide">
            <div className="row text-center">
              <div className="col-lg-4 mt-4">
                <Link
                  href="https://www.instagram.com/prekastev/"
                  target="_blank"
                >
                  <FaInstagram className="fs-1" />
                </Link>
              </div>

              <div className="col-lg-4 text-right mt-4">
                <Link
                  href="https://drive.google.com/file/d/17sjSQYnSRMC7rn8dUtY2cQV8_C-rLANr/view?usp=sharing"
                  target="_blank"
                >
                  <div className="info-box s2">
                    <i className="icon_book"></i>
                    <div className="info-box_text">
                      <div className="info-box_title">
                        <span className="id-color">Katalog</span>
                      </div>
                      <div className="info-box_subtite">İndir</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=9005313023707"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/images/whatsapp_destek.png" height={100} />
                  {/* <FaWhatsapp className="fs-1" /> */}
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 text-right sm-hide">
            <div className="info-box s2">
              <i className="icon_headphones"></i>
              <div className="info-box_text">
                <div className="info-box_title">
                  <span className="id-color">Bize Ulaşın</span>
                </div>
                <div className="info-box_subtite">+90 (0531) 302 37 07</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-group">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="md-flex">
                <ul id="mainmenu">
                  <li>
                    <Link href="/index.html" passHref legacyBehavior>
                      <MyButton name={"HOME"} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/founder.html" passHref legacyBehavior>
                      <MyButton name={"KURUCUMUZ"} />
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
                    <Link href="#" onClick={() => handleLinkClick()}>
                      İş Birliği
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact.html" passHref legacyBehavior>
                      <MyButton name={"İLETİŞİM"} />
                    </Link>
                  </li>

                  {/* Mobil Görünüm İçin Ekstra Menüler */}
                  <li className="d-block d-lg-none">
                    <Link
                      href="https://www.instagram.com/prekastev/"
                      target="_blank"
                    >
                      <span>Instagram</span>
                    </Link>
                  </li>
                  <li className="d-block d-lg-none">
                    <Link
                      href="https://api.whatsapp.com/send?phone=9005313023707"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>WhatsApp Destek</span>
                    </Link>
                  </li>
                  <li className="d-block d-lg-none">
                    <Link
                      href="https://drive.google.com/file/d/17sjSQYnSRMC7rn8dUtY2cQV8_C-rLANr/view?usp=sharing"
                      target="_blank"
                    >
                      <span>Katalog</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <ContractorModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};

export default Header;
