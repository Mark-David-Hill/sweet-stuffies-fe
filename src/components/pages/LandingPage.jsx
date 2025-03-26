import { useRef } from "react";

import Slideshow from "../features/Slideshow";

import s1i1 from "../../assets/landing-page/slideshow-1/s1i1.png";
import s1i2 from "../../assets/landing-page/slideshow-1/s1i2.png";
import s1i3 from "../../assets/landing-page/slideshow-1/s1i3.png";
import s1i4 from "../../assets/landing-page/slideshow-1/s1i4.png";
import s1i5 from "../../assets/landing-page/slideshow-1/s1i5.png";
import s2i1 from "../../assets/landing-page/slideshow-2/s2i1.png";
import s2i2 from "../../assets/landing-page/slideshow-2/s2i2.png";
import s2i3 from "../../assets/landing-page/slideshow-2/s2i3.png";
import s2i4 from "../../assets/landing-page/slideshow-2/s2i4.png";
import s3i1 from "../../assets/landing-page/slideshow-3/s3i1.png";
import s3i2 from "../../assets/landing-page/slideshow-3/s3i2.png";
import s3i3 from "../../assets/landing-page/slideshow-3/s3i3.png";
import deliveryImg from "../../assets/landing-page/delivery.png";
import logo from "../../assets/logo.svg";

function LandingPage() {
  const calendlyRef = useRef(null);

  const scrollToCalendly = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

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
          <Slideshow images={[s1i1, s1i2, s1i3, s1i4, s1i5]} />
        </div>
        <div className="contact-button-wrapper" onClick={scrollToCalendly}>
          <button>Book Your Free Design Consult With Me Today!</button>
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
            <Slideshow images={[s2i1, s2i2, s2i3, s2i4]} />
          </div>
          <div className="contact-button-wrapper">
            <button onClick={scrollToCalendly}>
              Book Your Free Design Consult With Me Today!
            </button>
          </div>
          <div className="step-wrapper">
            <h3>Step 2: Creation</h3>
            <p>I work my magic</p>
          </div>
          <div className="slideshow-1-wrapper">
            <Slideshow images={[s3i1, s3i2, s3i3]} />
          </div>
          <div className="contact-button-wrapper">
            <button onClick={scrollToCalendly}>
              Book Your Free Design Consult With Me Today!
            </button>
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
            <button onClick={scrollToCalendly}>
              Book Your Free Design Consult With Me Today!
            </button>
          </div>
        </div>
        <div className="calendly-wrapper" ref={calendlyRef}>
          <div
            id="calendly"
            className="calendly-inline-widget"
            data-url="https://calendly.com/sweet-stuffies-em/30min?primary_color=3bb517"
            data-resize="true"
          ></div>
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          ></script>
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
