import "../../styles/jodiAndPanelChartPage/DynamicHeader.css";

const DynamicHeader = ({
  text,
  link,
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
    <div className="dynamic-header" style={style}>
      <span style={{ backgroundColor: "#052d24" }}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h1>
            <strong>{text}</strong>
          </h1>
        </a>
      </span>
    </div>
  );
};

export default DynamicHeader;
