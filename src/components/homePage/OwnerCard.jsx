import "../../styles/homePage/OwnerCard.css";

const OwnerCard = ({
  siteName = "SattaMatkaDpboss.Mobi",
  rights = "ALL RIGHTS RESERVED (2012-2026)",
  owner = "PRO. BIG BOSS SIR",
  contact = "08829959562",
}) => {
  return (
    <div className="contact-card">
      <h3 className="site-name">{siteName}</h3>
      <p className="rights-text">{rights}</p>

      <div className="owner-info">
        <span className="owner-label">SITE OWNER:-</span>
        <p className="owner-name">{owner}</p>
      </div>

      <div className="vemo">{contact}</div>
    </div>
  );
};

export default OwnerCard;
