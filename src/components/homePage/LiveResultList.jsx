import "../../styles/homePage/LiveResultList.css";

const colors = [
  "orange",
  "blue",
  "green",
  "purple",
  "red",
  "darkslategray",
  "gold",
  "teal",
];

const LiveResultList = ({ results = [] }) => {
  return (
    <div className="live-result-list">
      <div className="live-result-list__header">
        ❰❰❰ 📶 LIVE MATKA RESULT ❱❱❱
      </div>
      <div className="live-result-list__body">
        {results.map((item, index) => (
          <div
            key={index}
            className={`live-result-list__row ${item.highlight ? "highlight" : ""}`}
          >
            <div className="jodichartleft">
              <a href={`/jodi/${item.url}`}>Jodi</a>
            </div>

            <div className="live-result-list__content">
              <span
                className="market-name"
                style={{ color: colors[index % colors.length] }}
              >
                {item.marketName}
              </span>
              <br />
              <span className="result-number">{item.result}</span>
              <br />
              <span className="time-range">
                ({item.openTime} - {item.closeTime})
              </span>
            </div>

            <div className="panelchartright">
              <a href={`/panel/${item.url}`}>Panel</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveResultList;
