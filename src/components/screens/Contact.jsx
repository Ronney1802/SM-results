import Header from "../common/Header";
import InfoCard from "../common/InfoCard";
import "../../styles/screens/Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact">
      <Header />
      <InfoCard
        title="हमसे संपर्क करें"
        buttonLabel="होम पेज पर वापस जाएं"
        buttonColor="#d32f2f"
        onButtonClick={() => navigate("/")}
      >
        <form action="" method="POST">
          <div class="form-group">
            <label>आपका नाम</label>
            <input type="text" name="name" required />
          </div>
          <div class="form-group">
            <label>ईमेल पता</label>
            <input type="email" name="email" required />
          </div>
          <div class="form-group">
            <label>संदेश</label>
            <textarea name="message" required></textarea>
          </div>
          <button type="submit" name="submit" class="submit-btn">
            संदेश भेजें
          </button>
        </form>
      </InfoCard>
    </div>
  );
};

export default Contact;
