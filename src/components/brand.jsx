const Brand = ({ image, title, subhead }) => {
  return (
    <div>
      <div className="brand-title" style={{ backgroundImage: `url(${image})` }}>
        <div className="brand-title-text">
          <h1>{title}</h1>
          <h6 className="link">{subhead}</h6>
        </div>
      </div>
    </div>
  );
};

export default Brand;
