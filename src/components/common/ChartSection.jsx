import "../../styles/common/ChartSection.css";

const ChartSection = ({ heading, items }) => {
  return (
    <div className="chart-section">
      <div className="chart-section-header">{heading}</div>
      {items.map((item, index) => (
        <div key={index} className="chart-list-instance">
          <a href={item.url}>{item.label}</a>
        </div>
      ))}
    </div>
  );
};

export default ChartSection;
