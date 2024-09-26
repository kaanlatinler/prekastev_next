import React from "react";

const ServiceCard = ({ service }) => {
  const titleWords = service.title.split(" ");

  const title1 = titleWords[0];
  const title2 = titleWords.length > 1 ? titleWords[1] : "";
  const title3 = titleWords.length > 2 ? titleWords[2] : "";
  return (
    <div className="col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom border-warning">
      <h3>
        <span className="id-color">
          {title1} {title3 ? title2 : ""}
        </span>
        &nbsp;
        {title3 ? title3 : title2}
      </h3>
      {service.description}
      <div className="spacer-single"></div>
      <br />
      <br />
    </div>
  );
};

export default ServiceCard;
