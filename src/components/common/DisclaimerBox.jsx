import "../../styles/common/DisclaimerBox.css";

const DisclaimerBox = ({ title = "!! Disclaimer !!", content }) => {
  return (
    <div className="footer-container disclaimer-box">
      <b className="disclaimer-title">{title}</b>
      <p className="disclaimer-text" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default DisclaimerBox;
