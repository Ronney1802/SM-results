import "../../styles/common/LiveUpdate.css";

const LiveUpdate = ({ updates = [] }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="live-update">
      <div className="live-update__header">
        <b>📡 LIVE UPDATE</b>                  {/* 📡 also comes frpom this code -> &#x1f4e1; */}
      </div>

      {updates.map((item, index) => (
        <div key={index} className="live-update__row">
          <span className="market-name">{item.market}</span>
          <br />
          <span className="result-number">{item.result}</span>
          <br />
          <div className="btn-refresh" onClick={handleRefresh}>
            Refresh
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default LiveUpdate;
