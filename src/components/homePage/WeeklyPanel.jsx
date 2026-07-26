import "../../styles/homePage/WeeklyPanel.css";

const WeeklyPanel = ({ startDate, endDate, title, data }) => {
  return (
    <div className="weekly-panel">
      <div className="weekly-panel__header">
        {`${title} From ${startDate} To ${endDate}`}
      </div>
      <div className="weekly-panel__content">
        {data.map((item, index) => {
          // If item is an object with key/value, render as key-value row
          if (typeof item === "object" && item.key && item.value) {
            return (
              <div
                key={index}
                className="weekly-panel__row weekly-panel__row--kv"
              >
                <span className="weekly-panel__key">{item.key}</span>
                <span className="weekly-panel__arrow">=&gt;</span>
                <span className="weekly-panel__value">{item.value}</span>
              </div>
            );
          }
          // Otherwise render as plain content
          return (
            <div
              key={index}
              className="weekly-panel__row weekly-panel__row--plain"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyPanel;
