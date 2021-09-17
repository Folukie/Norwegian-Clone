import Section from "./section";
<link
  href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
  rel="stylesheet"
/>;
const journals = [
  {
    id: 1,
    image: "./menu.jpg",
    title: "MOCKTAILS New experience of non-alcoholic drinks",
    caption:
      "There are 2 salons Salon de M where you can enjoy delicious drinks while touching clothes and looking at Scandinavian furniture un an unpretentious city ..",
  },
  {
    id: 2,
    image: "./journalTwo.jpg",
    title: "2nd Anniversary Norway meets BIZEN",
    caption:
      "Designer T-Michael is so interested in traditional Japanese art that it affects her own collection. He is Bizen ..",
  },
  {
    id: 3,
    image: "./journalThree.jpg",
    title: "Notice of website opening",
    caption:
      "We are pleased to announce the opening of the Norwegian Rain & T-MICHAEL Tokyo website ...",
  },
  {
    id: 4,
    image: "./journalFour.jpg",
    title: "Notice about SS21 collection",
    caption:
      "SS21 Norwegian Rain Mottanai Norwegian Rain has been well received ...",
  },
  {
    id: 5,
    image: "./raincho.jpg",
    title: "A focus on RAINCHO",
    caption:
      "RAINCHO which is also an icon of Norwegian Rain. Raincoat x Poncho is the name ...",
  },
];
const Journal = () => {
  return (
    <div>
      <div className="journal-section">
        <Section subhead="what's new" mainhead=" No orwegian Rain Journal" />
      </div>
      <div className="journal-grid">
        {journals.map((journal) => (
          <div className="journal-group">
            <img src={journal.image} alt="{journal.title}" />
            <h2>{journal.title}</h2>
            <h6>{journal.caption}</h6>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Journal;
