import "./Topper.scss";
import LightricksLogo from "../../assets/lightricks-logo.svg";

function Topper() {
  return (
    <>
      <div className="top-navigation">
        <img
          className="company-logo"
          src={LightricksLogo}
          alt="Lightricks Logo"
        />
        <div className="user-avatar">
          <span className="user-avatar-text">TJ</span>
        </div>
      </div>
    </>
  );
}

export default Topper;
