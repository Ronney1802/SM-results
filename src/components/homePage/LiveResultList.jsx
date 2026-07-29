import "../../styles/homePage/LiveResultList.css";
import { Link } from "react-router-dom";

const colors = ["green", "brown", "blue", "red", "Magenta", "purple"];

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
              <Link to={`record/jodi`}>Jodi</Link>
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
              <Link to={`record/panel`}>Panel</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveResultList;
