import Header from "../common/Header";
import InfoCard from "../common/InfoCard";
import "../../styles/screens/Disclaimer.css";
import { useNavigate } from "react-router-dom";

const Disclaimer = () => {
  const navigate = useNavigate();
  return (
    <div className="disclaimer">
      <Header />
      <InfoCard
        title="डिस्क्लेमर (Disclaimer)"
        buttonLabel="होम पेज पर वापस जाएं"
        buttonColor="#444"
        warningText="कृपया ध्यान दें: यह वेबसाइट केवल शैक्षिक और मनोरंजन के उद्देश्य के लिए है।"
        onButtonClick={() => navigate("/")}
      >
        <p>
          <span className="highlight">Satta Matka DPBoss</span>{" "}
          (SattaMatkaDpboss.Mobi) किसी भी प्रकार के सट्टा (Gambling) या अवैध
          व्यापार को बढ़ावा नहीं देता है। इस वेबसाइट पर दिखाया गया सारा डेटा
          इंटरनेट पर उपलब्ध सार्वजनिक जानकारी और अंकशास्त्र (Numerology) पर
          आधारित है।
        </p>

        <p>
          सट्टा मटका खेलना आपके देश या राज्य के कानूनों के अनुसार प्रतिबंधित हो
          सकता है। यदि आप हमारी वेबसाइट का उपयोग करते हैं, तो आप अपनी मर्जी से
          ऐसा कर रहे हैं। किसी भी प्रकार के वित्तीय लाभ या हानि के लिए वेबसाइट
          के मालिक या एडमिन जिम्मेदार नहीं होंगे।
        </p>

        <p>
          हम सभी देशों के कानूनों का सम्मान करते हैं। यदि आप हमारी शर्तों से
          सहमत नहीं हैं, तो कृपया अभी इस साइट को छोड़ दें। हम आपको सूचित करते
          हैं कि इस खेल में वित्तीय जोखिम शामिल है और इसकी लत लग सकती है। कृपया
          अपनी जिम्मेदारी पर खेलें।
        </p>
      </InfoCard>
    </div>
  );
};

export default Disclaimer;
