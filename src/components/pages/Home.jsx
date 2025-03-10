import Navbar from "../navigation/Navbar";

import chocolateChipCookies from "../../assets/chocolate-chip-cookies.jpg";
import blueberryMuffins from "../../assets/blueberry-muffins.jpg";
import scentedSpecial2 from "../../assets/capybara-front.jpg";
import appleCinnamon from "../../assets/apple-cinnamon.jpg";
import birthdayCake from "../../assets/birthday-cake.jpg";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="section-1">
        <div class="scented-specials-1 text-overlay-section">
          <div class="overlay-text">SCENTED SPECIALS</div>
        </div>
        <div className="scented-specials-2">
          <img src={scentedSpecial2} alt="" />
          <button>Buy Now</button>
        </div>
      </div>
      <div className="section-2">
        {/* <div class=".text-overlay-section choco-chip">
          <div class="overlay-text">CHOCOLATE CHIP COOKIES</div>
        </div> */}
        <img src={chocolateChipCookies} alt="Chocolate Chip Cookies" />
        <img src={appleCinnamon} alt="Apple Cinnamon Pie" />
        <img src={blueberryMuffins} alt="Blueberry Muffins" />
        <img src={birthdayCake} alt="Birthday Cake" />
      </div>
    </div>
  );
}

export default Home;
