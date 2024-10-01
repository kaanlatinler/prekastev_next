import Image from "next/image";
import Link from "next/link"; // Next.js Link bileşeni

const HeaderAdmin = () => {
  return (
    <header>
      {/* Ana Menü */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="md-flex">
              {/* Logo */}
              <div id="logo">
                <Link href="/admin">
                  <img className="logo" src="/assets/images/logo.png" alt="Logo" />
                </Link>
              </div>

              {/* Menü Butonu (Mobil İçin) */}
              <span id="menu-btn"></span>

              {/* Ana Menü */}
              <div>
                <nav className="md-flex">
                  <ul id="mainmenu">
                    <li>
                      <Link href="/admin/users">KULLANICILAR</Link>
                    </li>
                    <li>
                      <Link href="/admin/questions">SORULAR</Link>
                    </li>
                    <li>
                      <Link href="/admin/models">MODELLER</Link>
                    </li>
                    <li>
                      <Link href="/admin/steps">ADIMLAR</Link>
                    </li>
                    <li>
                      <Link href="/admin/sliders">SLİDER</Link>
                    </li>
                    <li>
                      <Link href="/admin/about">HAKKIMDA</Link>
                    </li>
                    <li>
                      <Link href="/admin/founder">KURUCU</Link>
                    </li>
                    <li>
                      <Link href="/admin/logout">ÇIKIŞ YAP</Link>
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

export default HeaderAdmin;
