import Link from "next/link";

const About = ({ abouts }) => {
  return (
    <section id="section-about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center wow fadeInUp">
            <h1>Ne yapıyoruz?</h1>
            <div className="separator">
              <span>
                <i className="fa fa-circle"></i>
              </span>
            </div>
            <div className="spacer-single"></div>
          </div>

          {abouts.map((about, index) => (
            <div
              key={index}
              className={`col-md-4 wow ${
                index === 0
                  ? "fadeInLeft"
                  : index === 1
                  ? "fadeInUp"
                  : "fadeInRight"
              }`}
              data-wow-delay={index === 1 ? ".2s" : ""}
            >
              <h3>
                <span className="id-color">{`${
                  index === 0 ? "Prekastev" : ""
                }`}</span>
                {`${index === 0 ? " Beton Evler" : ""}`}
              </h3>
              <p>{about.message}</p>
              <div className={`${index === 1 ? "py-2 my-1" : ""}`}></div>
              <div className={`${index === 2 ? "py-5 my-1" : ""}`}></div>
              <Link className="image-popup-no-margins" href={about.image}>
                <img
                  src={about.image}
                  className="img-responsive mt-2 pt-1"
                  alt={about.image}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
