import "../../styles/jodiAndPanelChartPage/ScrollButton.css";

const ScrollButton = ({ targetId, label }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div className="scroll-button-container">
      <a href={`#${targetId}`} onClick={handleClick}>
        {label}
      </a>
    </div>
  );
};

export default ScrollButton;
