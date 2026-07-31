import Header from "../common/Header";
import InfoCard from "../common/InfoCard";
import "../../styles/screens/About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about">
      <Header />
      <InfoCard
        title="हमारे बारे में (About Us)"
        buttonLabel="होम पेज पर वापस जाएं"
        buttonColor="#d32f2f"
        onButtonClick={() => navigate("/")}
      >
        <p>
          नमस्ते, <span className="highlight">Satta Matka DPBoss</span>
          (SattaMatkaDpboss.Mobi) में आपका स्वागत है। हम भारत के सबसे भरोसेमंद
          और तेज़ मटका रिजल्ट प्लेटफॉर्म में से एक हैं।
        </p>
        <p>
          हमारा लक्ष्य आपको
          <span className="highlight">Kalyan, Milan, Rajdhani, Main Bazar</span>
          जैसे सभी बड़े मार्केट के परिणाम सबसे पहले पहुँचाना है। हमारी अनुभवी
          टीम सटीक चार्ट्स और मुफ्त गेसिंग प्रदान करती है ताकि आप गेम को बेहतर
          ढंग से समझ सकें।
        </p>
        <p>
          हम तकनीक और ईमानदारी पर विश्वास करते हैं। हमारी वेबसाइट मोबाइल पर बहुत
          तेज़ चलती है ताकि आपको रिजल्ट देखने में कभी देरी न हो।
        </p>
        <p className="note">
          नोट: हमारी वेबसाइट केवल सूचना के उद्देश्य के लिए है। हम किसी भी तरह के
          सट्टा या अवैध जुए का समर्थन नहीं करते हैं।
        </p>
      </InfoCard>
    </div>
  );
};

export default About;
