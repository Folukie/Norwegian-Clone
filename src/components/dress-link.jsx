const DressLink = ({ title, price, src }) => {
  return (
    <div className="dress-link">
      <img src={src} alt="i" />
      <h4>{title}</h4>
      <h6>{price}(TAX IN)</h6>
    </div>
  );
};

export default DressLink;
