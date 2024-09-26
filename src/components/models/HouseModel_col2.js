const HouseModel_col2 = ({ model }) => {
  const title1 = model.title.split(" ")[0];
  const title2 = model.title.split(" ")[1];
  return (
    <div className="col-md-6">
      <h3>
        <span className="id-color">{title1}</span> {title2}
      </h3>
      <div className="spacer-single"></div>
      <img src={model.mainPicture} className="img-responsive" alt="" />
      <div className="spacer-single"></div>
      <a href={`/models/${model.id}.html`} className="btn-line btn-fullwidth">
        DAHA FAZLA
      </a>
    </div>
  );
};

export default HouseModel_col2;
