import Navbar from "../navigation/Navbar";

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

function Home() {
  const section2Items = [
    { imageSrc: chocolateChipCookies, label: "CHOCOLATE CHIP COOKIES" },
    { imageSrc: appleCinnamon, label: "APPLE CINNAMON PIE" },
    { imageSrc: blueberryMuffins, label: "BLUEBERRY MUFFINS" },
    { imageSrc: birthdayCake, label: "BIRTHDAY CAKE" },
  ];

  const section3Items = [
    { imageSrc: blueYoshi, label: "YOSHI" },
    { imageSrc: koroks, label: "KOROKS" },
    { imageSrc: unicorn, label: "UNICORN" },
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
        <div class="wavy-line"></div>
      </div>
      <div className="section-3">
        <h2>Shop the designs with raving reviews:</h2>
        <div className="images-wrapper">
          {section3Items.map((item) => (
            <div key={item.label} className="image-container">
              <img src={item.imageSrc} alt={item.label} />
              <div className="overlay">
                <div className="overlay-text">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-4">
        <img src={teddyBear} alt="Teddy Bear" />
      </div>
      <div className="section-5">
        <h2>MY PROMISE TO YOU</h2>
        <h3>CUTE</h3>
        <div className="image-text-pair">
          <img src={stuffiesCollection} alt="Collection of Stuffies" />
          <p>
            I strive to find the cutest possible patterns. I am drawn to ones
            that are hard to find (or impossible to find) in other stores,
            offering more selection. Every pattern, from the fluffiest cow to
            the creepiest spider must elicit an &apos;aw&apos; from at least one
            person before it gets added to our offerings. Button: Shop our
            “aw”-worthy selection now!
          </p>
        </div>
        {/* 


Sub header: Cuddly.
(Image on the right= photo of fabric and stuffing)
Text: As someone who is very textile-focused, I understand the importance of good textures in the toys I create and own. This was the most important thing to me when I started buying fabric and stuffing. I bought several different kinds of minky and stretch fabrics until I found the one that was soft, stretchy, and absolutely irresistible. I then found a stuffing so comforting and huggable, it feels like a down pillow without the annoying feather pricks. Every stuffie created just makes you want to snuggle up with it!

Button: Shop our most huggable stuffies now!

Sub-header: Uniquely Yours.
(image on the left= photo of child with stuffie)
Text: Every toy I make is made-to-order, never mass-produced. I have had wonderful custom orders of a Bruni doll for a young child who wanted it to smell like Birthday Cake. Another child wanted a Yoshi doll, but preferred a light-blue one instead of the usual green. Toys are best when they are suited for the specific child. Every child is different, why should their toys all be the same?

Button: Explore the endless possibilities today!


The second above ^ will be with a blue background after the teddy-bear picture but instead of the “endless possibilities” section. */}
      </div>
    </div>
  );
}

export default Home;
