import "../../styles/jodiAndPanelChartPage/MarketCard.css";

const MarketCard = ({ marketName, marketResult }) => {
  const handleRefresh = () => {
    window.location.reload(); // same behavior as original HTML
  };

  return (
    <div className="market-card">
      <div className="market-name">{marketName}</div>
      <span className="market-result">{marketResult}</span>
      <div className="refresh-btn" onClick={handleRefresh}>
        Refresh Result
      </div>
    </div>
  );
};

export default MarketCard;
