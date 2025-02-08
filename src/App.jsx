import "./styles/main.scss";

function App() {
  return (
    <div className="app-container">
      <div className="navbar">
        <div className="logo">
          <img
            src="data:image/png;base64,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"
            alt="Sweet Stuffies Logo"
          />
        </div>
        <div className="navbar-main">
          <div className="socials">icons</div>
          <div className="title">Sweet Stuffies</div>
          <div className="links">
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">Photo Gallery</a>
            <a href="">About Me</a>
            <a href="">Contact</a>
          </div>
        </div>
      </div>
      <div className="home-container">
        <div className="ad">Ad</div>
        <div className="section">Content</div>
        <div className="ad">Ad</div>
        <div className="section">Content</div>
      </div>
    </div>
  );
}

export default App;
