import Navbar from "../navigation/Navbar";

import scentedSpecial1 from "../../assets/alpaca-front.jpg";
import scentedSpecial2 from "../../assets/capybara-front.jpg";
import logo from "../../assets/logo.svg";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="section-1">
        <div class="scented-specials-1">
          <div class="overlay-text">SCENTED SPECIALS</div>
        </div>
        <div className="scented-specials-2">
          <img src={scentedSpecial2} alt="" />
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
