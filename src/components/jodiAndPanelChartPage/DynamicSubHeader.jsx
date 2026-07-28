import "../../styles/jodiAndPanelChartPage/DynamicSubHeader.css";

const DynamicSubHeader = ({
  heading,
  description,
  backgroundColor = "#6d0c3e",
  color = "#fff",
  borderColor = "red",
}) => {
  const style = {
    backgroundColor,
    color,
    borderColor,
  };

  return (
    <div className="dynamic-subheader" style={style}>
      <span style={{ backgroundColor: "#052d24" }}>
        <h2>{heading}</h2>
        <p>{description}</p>
      </span>
    </div>
  );
};

export default DynamicSubHeader;
