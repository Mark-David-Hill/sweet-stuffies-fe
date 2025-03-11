import Navbar from "../navigation/Navbar";

import chocolateChipCookies from "../../assets/chocolate-chip-cookies.jpg";
import blueberryMuffins from "../../assets/blueberry-muffins.jpg";
import scentedSpecial2 from "../../assets/capybara-front.jpg";
import appleCinnamon from "../../assets/apple-cinnamon.jpg";
import birthdayCake from "../../assets/birthday-cake.jpg";

function Home() {
  const section2Items = [
    { imageSrc: chocolateChipCookies, label: "CHOCOLATE CHIP COOKIES" },
    { imageSrc: appleCinnamon, label: "APPLE CINNAMON PIE" },
    { imageSrc: blueberryMuffins, label: "BLUEBERRY MUFFINS" },
    { imageSrc: birthdayCake, label: "BIRTHDAY CAKE" },
  ];

  return (
    <div className="home-container">
      <Navbar />
      <div className="section-1">
        <div className="scented-specials-1 text-overlay-section">
          <div className="overlay-text">SCENTED SPECIALS</div>
        </div>
        <div className="scented-specials-2">
          <img src={scentedSpecial2} alt="" />
          <button>Buy Now</button>
        </div>
      </div>
      <div className="section-2">
        {section2Items.map((item) => (
          <div key={item.label} className="image-container">
            <img src={item.imageSrc} alt={item.label} />
            <div className="overlay">
              <div className="overlay-text">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
