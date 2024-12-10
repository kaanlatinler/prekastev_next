import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Steps = ({ steps }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(null); // Aktif sekmeyi tutar

  const handleTabClick = (index, sId) => {
    router.push(`/steps/${sId}`); // Tıklanan sekmeye göre sayfayı yönlendirir
  };

  return (
    <section id="section-steps" className="jarallax text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 offset-md-3 text-center wow fadeInUp">
            <h1>Yapım Aşamaları</h1>
            <div className="separator">
              <span>
                <i className="fa fa-circle"></i>
              </span>
            </div>
            <div className="spacer-single"></div>
          </div>

          <div className="col-md-12">
            <div className="de_tab tab_steps">
              {/* Sekme başlıklarını dinamik olarak render ediyoruz */}
              <ul className="de_nav">
                {steps.map((step, index) => (
                  <li
                    key={index}
                    className={activeTab === index ? "active" : ""} // Aktif sekmeye göre class ekler
                    onClick={() => handleTabClick(index, step.id)} // Sekmeye tıklandığında set eder
                  >
                    <span>{step.title}</span>{" "}
                    {/* Sekme başlıklarını gösterir */}
                    <div className="v-border"></div>
                  </li>
                ))}
              </ul>

              {/* İçerikleri dinamik olarak render ediyoruz */}
              <div className="de_tab_content">
                {steps.map(
                  (step, index) =>
                    activeTab === index && ( // Sadece aktif sekmeyi gösterir
                      <div key={index}>
                        <p>{step.message}</p> {/* Sekme mesajını gösterir */}
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
