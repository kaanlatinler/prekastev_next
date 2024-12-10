import Link from "next/link";

const Slider = ({ sliders }) => {
  return (
    <div>
      <section
        id="section-slider"
        className="fullwidthbanner-container"
        aria-label="section-slider"
      >
        <div id="revolution-slider">
          <ul>
            {sliders.map((slider, index) => (
              <li
                key={slider.id}
                data-transition="fade"
                data-slotamount="10"
                data-masterspeed="200"
                data-thumb=""
              >
                {/* Resimlere gri filtre ekliyoruz */}
                <img src={slider.image} alt="" />
                <div
                  className="tp-caption big-white sft"
                  data-x="0"
                  data-y="150"
                  data-speed="800"
                  data-start="400"
                  data-easing="easeInOutExpo"
                  data-endspeed="450"
                >
                  PREKAST BETON EV TEKNOLOJİSİ
                </div>

                <div
                  className="tp-caption ultra-big-white customin customout start"
                  data-x="0"
                  data-y="center"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:2;scaleY:2;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.85;scaleY:0.85;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="800"
                  data-start="400"
                  data-easing="easeInOutExpo"
                  data-endspeed="400"
                >
                  {slider.title}
                </div>
                <div
                  className="tp-caption sfb"
                  data-x="center"
                  data-y="335"
                  data-speed="1000"
                  data-start="800"
                  data-easing="easeInOutExpo"
                >
                  <Link href="/contact.html" className="btn-slider">
                    Şimdi Hayalindeki Evin Fiyatını Öğren
                  </Link>
                  <p className="text-white fw-bold ps-5 fs-5 mt-4">
                    Biz Sizi Arayalım
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Slider;
