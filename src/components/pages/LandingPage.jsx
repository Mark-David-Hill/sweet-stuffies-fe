import { useRef } from "react";
import { FaInstagram } from "react-icons/fa";

import Slideshow from "../features/Slideshow";

import s1i1 from "../../assets/landing-page/slideshow-1/s1i1.webp";
import s1i2 from "../../assets/landing-page/slideshow-1/s1i2.webp";
import s1i3 from "../../assets/landing-page/slideshow-1/s1i3.webp";
import s1i4 from "../../assets/landing-page/slideshow-1/s1i4.webp";
import s1i5 from "../../assets/landing-page/slideshow-1/s1i5.webp";
import s2i1 from "../../assets/landing-page/slideshow-2/s2i1.webp";
import s2i2 from "../../assets/landing-page/slideshow-2/s2i2.webp";
import s2i3 from "../../assets/landing-page/slideshow-2/s2i3.webp";
import s2i4 from "../../assets/landing-page/slideshow-2/s2i4.webp";
import s3i1 from "../../assets/landing-page/slideshow-3/s3i1.webp";
import s3i2 from "../../assets/landing-page/slideshow-3/s3i2.webp";
import s3i3 from "../../assets/landing-page/slideshow-3/s3i3.webp";
import deliveryImg from "../../assets/landing-page/delivery.webp";
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
            <img src={logo} alt="Sweet Stuffies Logo" />

            <div className="heading-wrapper">
              <h1>Sweet Stuffies</h1>
              <h2>Cute. Cuddly. Uniquely Yours.</h2>
              <h3>Handmade custom stuffies made in Eagle Mountain, Utah.</h3>
            </div>
          </div>
        </div>
        <div className="links-wrapper">
          <a
            href="https://www.instagram.com/sweetstuffies.em?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="slideshow-1-wrapper">
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

        <div className="about-section">
          <h2> About Me</h2>
          <p>
            My name is Krystal Hill and I’m the creative mind behind Sweet
            Stuffies. I have always loved making toys. While my sisters were
            using their sewing skills to sew amazing things like prom dresses
            and dance costumes, I was sewing felt food and sock animals. Even as
            I grew up, those around me went into serious professions like
            doctors, nurses, and businesspeople. I moved to Japan with my
            husband and became a kindergarten teacher. I loved playing with the
            kids every day and seeing how quickly they learned and grew. I loved
            coming up with new games for us to play together and seeing how they
            interacted with the toys they had in the classroom.
          </p>
          <p>
            I noticed that children tended to have few toys because of the small
            spaces of Japanese homes. But the toys they had, they treasured.
            Toys were more expensive, but they were also of higher quality with
            cute details and super soft fabric.
          </p>
          <p>
            After 7 amazing years in Japan, I started to experience strange
            symptoms that affected my ability to teach. I went to the doctor
            and, after a barrage of tests, I was diagnosed with M.S. I moved
            back to the U.S. and the support of my family.
          </p>
          <p>
            {" "}
            Going through the M.S. diagnoses was hard. I went from teaching and
            playing every day to being unable to teach at all. I tried to be a
            substitute teacher, but the exertion was too much for my body to
            handle consistently and I had to quit. I went from being the sole
            breadwinner in our house, to being barely able to be helpful at all.
            Even simple things were hard, like taking our dog outside to go to
            the bathroom.
          </p>
          <p>
            With lots of mental energy, but very little physical energy, my
            creativity needed an outlet. I decided to make stuffies. I
            researched online and found an incredibly soft fabric that when
            matched with an unbelievably soft stuffing was heavenly. I also was
            surprised to find that, even in my worst M.S. days, I could still
            sew reliably. It was invigorating and I loved it. Imagine my
            surprise when a friend came over, admired one of my stuffies, and
            asked if I could make one for each of her kids!
          </p>
          <p>
            So I did! Since then, people have been asking me to make some for
            their children as well. I love it. I love seeing kids loving on
            their special stuffie that was made just for them, ordered by
            someone who knows and loves them. I love seeing them choose the
            scent that they want and the fabric color that their child will just
            LOVE.{" "}
          </p>
          <p>
            <b>
              This is the best job in the world. And I am honored to be able to
              make a special, one-of-a-kind stuffie for your special,
              one-of-a-kind child.
            </b>
          </p>
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
