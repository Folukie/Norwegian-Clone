import Section from "./section";
import { FiInstagram } from "react-icons/fi";
const igImages = [
  {
    id: 1,
    image: "./igOne.jpg",
  },
  {
    id: 2,
    image: "./igTwo.jpg",
  },
  {
    id: 3,
    image: "./igThree.jpg",
  },
  {
    id: 4,
    image: "./igFour.jpg",
  },
  {
    id: 5,
    image: "./igFive.jpg",
  },
  {
    id: 6,
    image: "./igSix.jpg",
  },
]
const Instagram = () => {
 
  return (
    <div>
      <div class="ig-section">
        <Section subhead="tokyo snap" mainhead="Follow us on instagram" />
      </div>
      <div className="ig-grid">
        <FiInstagram className="icon" />

        {igImages.map((image) => (
          <img src={image.image} alt="instagram" />
        ))}
      </div>
    </div>
  );
};

export default Instagram;
