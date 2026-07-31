import "../../styles/common/Header.css";
import Logo from "../../assets/images/satta-matka-dpboss.png";

const Header = () => {
  return (
    <div className="header">
      <img
        src={Logo}
        alt="Satta Matka DPBoss Logo"
        style={{ width: "250px", height: "auto" }}
      />
    </div>
  );
};

export default Header;
