import "../../styles/common/InfoCard.css";

const InfoCard = ({
  title,
  titleColor = "#d32f2f",
  buttonLabel,
  buttonColor = "#d32f2f",
  onButtonClick,
  children,
  warningText,
}) => {
  return (
    <div className="info-card">
      <h1 style={{ color: titleColor, borderLeft: `5px solid ${titleColor}` }}>
        {title}
      </h1>

      {warningText && <div className="warning-box">{warningText}</div>}

      <div className="info-content">{children}</div>

      <button
        className="info-btn"
        style={{ background: buttonColor }}
        onClick={onButtonClick}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default InfoCard;
