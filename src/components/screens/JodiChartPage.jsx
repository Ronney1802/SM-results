import "../../styles/screens/JodiChartPage.css";
import ScrollButton from "../jodiAndPanelChartPage/ScrollButton";
import JodiChartTable from "../jodiAndPanelChartPage/JodiChartTable";
import MarketCard from "../jodiAndPanelChartPage/MarketCard";
import Footer from "../jodiAndPanelChartPage/Footer";
import WhatsAppButton from "../jodiAndPanelChartPage/WhatsappButton";
import DynamicHeader from "../jodiAndPanelChartPage/DynamicHeader";
import DynamicSubHeader from "../jodiAndPanelChartPage/DynamicSubHeader";

const JodiChartPage = () => {
  return (
    <div className="jodi-chart-page">
      <DynamicHeader
        text="RAJA RANI MORNING CHART"
        backgroundColor="#6d0c3e"
        color="#fff"
        borderColor="red"
      />
      <DynamicSubHeader
        heading="Raja Rani Morning Jodi Matka Chart"
        description="raja rani morning chart, raja rani morning day satta chart, day raja rani morning jodi chart record, raja rani morning jodi patti chart"
        backgroundColor="#6d0c3e"
        color="#fff"
        borderColor="red"
      />
      <div id="top"></div>
      <MarketCard marketName="RAJA-RANI MORNING" marketResult="789-41-399" />
      <ScrollButton targetId="bottom" label="Go to Bottom" />
      <div align="center">
        <JodiChartTable />
      </div>
      <ScrollButton targetId="top" label="Go to Top" />
      <div id="bottom"></div>
      <MarketCard marketName="RAJA-RANI MORNING" marketResult="789-41-399" />
      {/* Replace below demo channelId with your actual channel ID */}
      <WhatsAppButton
        channelId="1234567890"
        label="Join our WhatsApp channel for fast Result"
      />
      <Footer />
    </div>
  );
};

export default JodiChartPage;
