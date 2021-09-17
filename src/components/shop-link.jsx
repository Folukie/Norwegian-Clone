const ShopLink = ({ title, style }) => {
  return (
    <div className="shop-link">
      <div className="bg-image" style={style}>
        <h1>{title}</h1>
        <button >shop now</button>
      </div>
    </div>
  );
};
export default ShopLink;
