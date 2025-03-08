import "./styles/main.scss";

import scentedSpecial1 from "./assets/alpaca-front.jpg";
import scentedSpecial2 from "./assets/capybara-front.jpg";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="app-container">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Sweet Stuffies Logo" />
        </div>
        <div className="navbar-main">
          <div className="links">
            <a href="">Stuffies</a>
            <a href="">Custom Order</a>
            <a href="">Gallery</a>
            <a href="">Contact Us</a>
            <a href="">About</a>
          </div>
        </div>
      </div>
      <div className="home-container">
        <div className="section-1">
          <div class="image-banner">
            <div class="overlay-text">SCENTED SPECIALS</div>
          </div>
          <img className="scented-special-2" src={scentedSpecial2} alt="" />
          <button>Buy Now</button>
        </div>
        {/* <div className="ad">Ad</div>
        <div className="section">Content</div>
        <div className="ad">Ad</div>
        <div className="section">Content</div> */}
      </div>
    </div>
  );
}

export default App;
