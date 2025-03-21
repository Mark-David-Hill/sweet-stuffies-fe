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

import deliveryImg from "../../assets/landing-page/delivery.jpg";
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
      <div className="contact-button-wrapper">
        <button>Book Your Free Consultation With Me Today!</button>
      </div>
      <h2>How It Works</h2>
      <div className="process-section">
        <h3>Step 1: Consultation</h3>
        <p>See what I can do, tell me what you want</p>
        <Slideshow />
        <button>Book Your Free Consultation With Me Today!</button>
        <h3>Step 2: Creation</h3>
        <p>I work my magic</p>
        <Slideshow />
        <button>Book Your Free Consultation With Me Today!</button>
        <h3>Step 3: Elation</h3>
        <p>Cute cuddly-ness delivered straight to you</p>
        <img src={deliveryImg} alt="Delivery Stock photos by Vecteezy" />
        <button>Book Your Free Design Consult With Me Today!</button>
      </div>
      <div className="end-section">
        <h2>Questions? Concerns? Contact me at:</h2>
        <a href="sweet.stuffies.em@gmail.com">sweet.stuffies.em@gmail.com</a>
      </div>

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
