import TopicCard from "./TopicCard";
import "../../styles/homePage/ForumSection.css";

const ForumSection = ({ title, topics }) => {
  return (
    <section className="forum-section">
      <h2 className="forum-heading">{title}</h2>
      <div className="forum-list">
        {topics.map((item, index) => (
          <TopicCard
            key={index}
            topic={item.topic}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ForumSection;
