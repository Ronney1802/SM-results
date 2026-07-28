import PanelChartTable from "../jodiAndPanelChartPage/PanelChartTable";
import PanelChartData from "../../data/PanelChartData.json";
import "../../styles/screens/PanelChartPage.css";
import ScrollButton from "../jodiAndPanelChartPage/ScrollButton";
import MarketCard from "../jodiAndPanelChartPage/MarketCard";
import Footer from "../jodiAndPanelChartPage/Footer";
import WhatsAppButton from "../jodiAndPanelChartPage/WhatsappButton";
import DynamicHeader from "../jodiAndPanelChartPage/DynamicHeader";
import DynamicSubHeader from "../jodiAndPanelChartPage/DynamicSubHeader";

const PanelChartPage = () => {
  return (
    <div className="panel-chart-page">
      <DynamicHeader
        text="RAJA RANI MORNING PANEL CHART" /* Here the "RAJA RANI MORNING" will be dynamic */
        backgroundColor="#0c0361"
        color="red"
        borderColor="red"
      />
      <DynamicSubHeader
        heading="Raja Rani Jodi Patti chart"
        description="raja rani penal chart, raja rani day jodi patti record chart, raja rani day satta penal chart com, raja rani satta penal with chart, panel chart for raja rani matka, raja rani bazar panel chart"
        backgroundColor="#0c0361"
        color="#fff"
        borderColor="red"
      />
      <div id="top"></div>
      <MarketCard marketName="RAJA-RANI MORNING" marketResult="789-41-399" />
      <ScrollButton targetId="bottom" label="Go to Bottom" />
      <div align="center">
        <PanelChartTable data={PanelChartData} />
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

export default PanelChartPage;
