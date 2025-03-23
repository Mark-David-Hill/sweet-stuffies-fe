import { useState, useEffect } from "react";
// import chocolateChipCookies from "../../assets/chocolate-chip-cookies.jpg";
// import stuffiesCollection from "../../assets/stuffies-collection.jpg";
// import blueberryMuffins from "../../assets/blueberry-muffins.jpg";

// const images = [
//   chocolateChipCookies,
//   stuffiesCollection,
//   blueberryMuffins,
//   chocolateChipCookies,
//   stuffiesCollection,
//   blueberryMuffins,
// ];

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  // Move to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="slideshow-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Slideshow;
