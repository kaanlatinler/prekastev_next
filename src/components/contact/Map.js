const Map = () => {
    return (
      <section id="de-map" aria-label="map-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="map-container map-fullwidth">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.6500698424093!2d30.70832071217932!3d36.87479397211008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3900a1eac9cc9%3A0x5a52f4117578afd1!2sGen%C3%A7lik%2C%20Fevzi%20%C3%87akmak%20Cd.%20No%3A77%2C%2007100%20Muratpa%C5%9Fa%2FAntalya!5e0!3m2!1str!2str!4v1726224765686!5m2!1str!2str"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Map;
  