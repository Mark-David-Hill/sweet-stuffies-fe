import Navbar from "../navigation/Navbar";

import Slideshow from "../features/Slideshow";

import deliveryImg from "../../assets/landing-page/delivery.jpg";
import s1i1 from "../../assets/landing-page/slideshow-1/s1i1.jpg";
import s1i2 from "../../assets/landing-page/slideshow-1/s1i2.jpg";
import s1i3 from "../../assets/landing-page/slideshow-1/s1i3.jpg";
import s1i4 from "../../assets/landing-page/slideshow-1/s1i4.jpg";
import s1i5 from "../../assets/landing-page/slideshow-1/s1i5.jpg";
import s1i6 from "../../assets/landing-page/slideshow-1/s1i6.jpg";
import s1i7 from "../../assets/landing-page/slideshow-1/s1i7.jpg";
import s1i8 from "../../assets/landing-page/slideshow-1/s1i8.jpg";
import s1i9 from "../../assets/landing-page/slideshow-1/s1i9.jpg";
import s1i10 from "../../assets/landing-page/slideshow-1/s1i10.jpg";
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
        <div className="slideshow-1-wrapper">
          {/* <img src={s1i1} alt="" />
          <img src={s1i5} alt="" />
          <img src={s1i6} alt="" /> */}
          <Slideshow images={[s1i2, s1i3, s1i4, s1i7, s1i8, s1i9, s1i10]} />
        </div>
        <div className="contact-button-wrapper">
          <button>Book Your Free Consultation With Me Today!</button>
        </div>
      </div>

      <main>
        <div className="process-section">
          <h2>How It Works</h2>
          <div className="step-wrapper">
            <h3>Step 1: Consultation</h3>
            <p>See what I can do, tell me what you want</p>
          </div>
          <div className="slideshow-1-wrapper">
            <Slideshow images={[s1i2, s1i3, s1i4, s1i7, s1i8, s1i9, s1i10]} />
          </div>
          <div className="contact-button-wrapper">
            <button>Book Your Free Consultation With Me Today!</button>
          </div>
          <div className="step-wrapper">
            <h3>Step 2: Creation</h3>
            <p>I work my magic</p>
          </div>
          <div className="slideshow-1-wrapper">
            <Slideshow images={[s1i2, s1i3, s1i4, s1i7, s1i8, s1i9, s1i10]} />
          </div>
          <div className="contact-button-wrapper">
            <button>Book Your Free Consultation With Me Today!</button>
          </div>
          <div className="step-wrapper">
            <h3>Step 3: Elation</h3>
            <p>Cute cuddly-ness delivered straight to you</p>
          </div>
          <img
            className="delivery-img"
            src={deliveryImg}
            alt="Delivery Stock photos by Vecteezy"
          />
          <div className="contact-button-wrapper">
            <button>Book Your Free Design Consult With Me Today!</button>
          </div>
        </div>
        <div className="calendly-wrapper">
          <h2>Calendly Section</h2>
        </div>
        <div className="end-section">
          <h2>Questions? Concerns? Contact me at:</h2>
          <a href="sweet.stuffies.em@gmail.com">sweet.stuffies.em@gmail.com</a>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
