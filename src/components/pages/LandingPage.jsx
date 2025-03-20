import Navbar from "../navigation/Navbar";

import Slideshow from "../features/Slideshow";

import chocolateChipCookies from "../../assets/chocolate-chip-cookies.jpg";
import stuffiesCollection from "../../assets/stuffies-collection.jpg";
import blueberryMuffins from "../../assets/blueberry-muffins.jpg";
import scentedSpecial2 from "../../assets/capybara-front.jpg";
import appleCinnamon from "../../assets/apple-cinnamon.jpg";
import birthdayCake from "../../assets/birthday-cake.jpg";
import blueYoshi from "../../assets/blue-yoshi-1.jpg";
import teddyBear from "../../assets/teddy-bear-1.jpg";
import unicorn from "../../assets/unicorn.jpg";
import koroks from "../../assets/koroks.jpg";
import logo from "../../assets/logo.svg";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="heading-section-container">
        <div className="heading-overlay">
          <div className="image-heading-wrapper">
            <img src={logo} alt="" />

            <div className="heading-wrapper">
              <h1>Sweet Stuffies</h1>
              <h2>Cute. Cuddly. Uniquely Yours.</h2>
              <h3>Handmade custom stuffies made in Eagle Mountain, Utah.</h3>
            </div>
          </div>
        </div>
      </div>
      <Slideshow />
      {/* <div className="slideshow-container">
        <div className="slides">
          <img src={teddyBear} alt="" />
          <img src={unicorn} alt="" />
          <img src={koroks} alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default LandingPage;
