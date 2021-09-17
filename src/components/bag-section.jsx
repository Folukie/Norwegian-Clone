import DressLink from "./dress-link";

const BagSection = () => {
  return (
    <div className="bag-section">
      <DressLink title="studio bag" price="64,900(TAX IN)" src="./bag.jpg"/>
      <DressLink title="ruck sack" price="57,200(TAX IN)" src="./sack.jpg" />
    </div>
  );
};

export default BagSection;
