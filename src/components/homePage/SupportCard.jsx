// SupportCard.jsx
import "../../styles/homePage/SupportCard.css";

const SupportCard = () => {
  return (
    <div className="support-card">
      <h3 className="support-header">Contact For Any Support And Queries</h3>
      <p className="support-text">
        Email us, and we will get back to you shortly.
      </p>
      <div className="support-body">
        <a href="mailto:support@sattamatkadpboss.mobi" className="email-link">
          support@sattamatkadpboss.mobi
        </a>
      </div>
    </div>
  );
};

export default SupportCard;
