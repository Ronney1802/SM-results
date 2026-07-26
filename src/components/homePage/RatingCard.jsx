import "../../styles/common/RatingCard.css";

const RatingCard = ({
  title = "DPBoss User Reviews & Ratings",
  stars = "⭐⭐⭐⭐⭐",
  score = "4.9 / 5",
  votes = "14,850",
  description = "Fastest Satta Matka Results and Accurate Charts trusted by thousands of users daily."
}) => {
  return (
    <div className="dpboss-rating-container">
      <div className="dpboss-rating-box">
        <h3 className="dpboss-rating-title">{title}</h3>

        <div className="dpboss-stars-row">
          <span className="dpboss-rating-stars">{stars}</span>
          <span className="dpboss-rating-score">{score}</span>
        </div>

        <p className="dpboss-user-votes">Based on {votes} votes</p>

        <p className="dpboss-rating-text">{description}</p>
      </div>
    </div>
  );
};

export default RatingCard;
