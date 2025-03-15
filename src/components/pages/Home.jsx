import Navbar from "../navigation/Navbar";

import chocolateChipCookies from "../../assets/chocolate-chip-cookies.jpg";
import blueberryMuffins from "../../assets/blueberry-muffins.jpg";
import scentedSpecial2 from "../../assets/capybara-front.jpg";
import appleCinnamon from "../../assets/apple-cinnamon.jpg";
import birthdayCake from "../../assets/birthday-cake.jpg";
import blueYoshi from "../../assets/blue-yoshi-1.jpg";
import unicorn from "../../assets/unicorn.jpg";
import koroks from "../../assets/koroks.jpg";

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
      <div class="wavy-line"></div>
      <div className="section-3">
        <h2>Shop the designs with raving reviews:</h2>
        <div className="images-wrapper">
          <img src={blueYoshi} alt="Blue Yoshi Plushie" />
          <img src={koroks} alt="Korok Plushies" />
          <img src={unicorn} alt="Unicorn Plushie" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;
