import Link from "next/link";

const More = () => {
  return (
    <section
      id="view-all-projects"
      className="call-to-action bg-color text-dark"
      data-speed="5"
      data-type="background"
      aria-label="cta"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>
              Daha Fazla Sorunuz Mu Var? <span>Sormaya Çekinmeyin?</span>
            </h2>
          </div>

          <div className="col-md-4 text-right">
            <Link
              href="/contact.html"
              className="btn btn-line black btn-big wow fadeInUp"
            >
              Bize Sor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;
