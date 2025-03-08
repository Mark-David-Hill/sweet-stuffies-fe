import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <div className="navbar-container">
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
  );
}

export default Navbar;
