import "../../styles/homePage/TopicCard.css";

const TopicCard = ({ topic, link = "#", icon }) => {
  // console.log(topic, link, icon);

  return (
    <div className="topic-box">
      <a href={link} className="topic-link">
        {icon && <img src={icon} alt="" className="topic-icon" />}
        <span className="topic-text">{topic}</span>
        {icon && <img src={icon} alt="" className="topic-icon" />}
      </a>
    </div>
  );
};

export default TopicCard;
