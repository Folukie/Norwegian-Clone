import DressLink from "./dress-link";
import Brand from "./brand";
const mensItem =
        [
            {
              id: 1,
              text: "Raincho",
              price: 104500,
              image: "./raincho.jpg",
            },
            {
              id: 2,
              text: "Raincho",
              price: 121000,
              image: "./two.jpg",
            },
            {
              id: 3,
              text: "Raincho",
              price: 104500,
              image: "./three.jpg",
            },
            {
              id: 4,
              text: "Raincho",
              price: 110500,
              image: "./four.jpg",
            },
            {
              id: 5,
              text: "Ruckstack",
              price: 57200,
              image: "./five.jpg",
            },
            {
              id: 6,
              text: "cph",
              price: 132000,
              image: "./six.jpg",
            },
            {
              id: 7,
              text: "tour de bergen",
              price: 132000,
              image: "./seven.jpg",
            },
            {
              id: 8,
              text: "M65",
              price: 126500,
              image: "./eight.jpg",
            },
            {
              id: 9,
              text: "Raincho",
              price: 115500,
              image: "./nine.jpg",
            },
            {
              id: 10,
              text: "Bracelet",
              price: 64900,
              image: "./ten.jpg",
            },
            {
              id: 11,
              text: "the waterproof boot",
              price: 64900,
              image: "./eleven.jpg",
            },
            {
              id: 12,
              text: "double beasted",
              price: 121000,
              image: "./twelve.jpg",
            },
            {
              id: 13,
              text: "neta falck",
              price: 126500,
              image: "./thirteen.jpg",
            },
            {
              id: 14,
              text: "walker",
              price: 110000,
              image: "./forteen.jpg",
            },
            {
              id: 15,
              text: "single beasted",
              price: 121000,
              image: "./fifteen.jpg",
            },
            {
              id: 16,
              text: "raincho",
              price: 126500,
              image: "./sixteen.jpg",
            },
            {
              id: 17,
              text: "raincho",
              price: 115500,
              image: "./seventeen.jpg",
            },
            {
              id: 18,
              text: "unimatic uwku1fm",
              price: 104500,
              image: "./eighteen.jpg",
            },
          ]


const Men = () => {
    
  
  return ( 
    <div>
    <Brand  title="men" subhead="43 ITEMS" image="/bgMen.png"/>

    <div className="men-grid">
      {mensItem.map((item) => (
        <div key={item.id}>
                <DressLink title={item.text} price={item.price} src={item.image} />

        </div>
      ))}
    </div>
    </div>
  );
};

export default Men;
