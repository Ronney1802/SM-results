import "../../styles/jodiAndPanelChartPage/WhatsappButton.css";

const WhatsAppButton = ({ channelId, label }) => {
  const link = `https://whatsapp.com/channel/${channelId}`;

  return (
    <div className="whatsapp-btn">
      <a href={link} target="_blank" rel="noopener noreferrer nofollow">
        {label}
      </a>
    </div>
  );
};

export default WhatsAppButton;
