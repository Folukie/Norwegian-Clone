import ShopLink from "./shop-link";
import DressLink from "./dress-link";

const About = () => {
  return (
    <div className="about">
        <ShopLink title="Women" style={{ backgroundImage: "url(./women.jpg)" }}/>
        <DressLink title="raincho" price="104,500(TAX IN)" src="./raincho.jpg"/>
        <DressLink title="raincho" price="104,500(TAX IN)" src="./raincho.jpg"/>

        <ShopLink title="Men" style={{ backgroundImage: "url(./men.jpg)" }}/>


    </div>
  );
};

export default About;
