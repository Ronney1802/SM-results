import "../../styles/pages/Home.css";
import liveResultsData from "../../data/LiveResultList.json";
import forumData from "../../data/ForumTopics.json";
import AppDownloadBanner from "../common/AppDownloadBanner";
import LiveResultList from "../common/LiveResultList";
import LiveUpdate from "../common/LiveUpdate";
import LuckyNumberCard from "../common/LuckyNumberCard";
import SupportCard from "../common/SupportCard";
import ForumSection from "../common/ForumSection";
import RatingCard from "../common/RatingCard";
import OwnerCard from "../common/OwnerCard";
import Banner from "../common/Banner";
import FloatingButton from "../common/FloatingButton";
import { InfoSectionQnA } from "../common/InfoSectionQnA"; // we import this component like this because this does not provide an export named 'default'

const Home = () => {
  return (
    <>
      <div className="head1">
        {/* <p className="hindi-text">
          विश्व की पहली <br /> भरोसेमन्द वेबसाइट
        </p>
        <h1>
          <a
            title="Satta Matka"
            href="https://sattamatkadpboss.mobi/"
            className="link-title"
          >
            Satta Matka
          </a>
        </h1> */}
        <h2 className="sub-title">SattaMatkaDpboss.Mobi</h2>
      </div>
      <div className="head1">
        <main>
          <p>
            <strong>SattaMatkaDpboss.Mobi</strong> is India's fastest and most
            trusted platform for <strong>DPBoss Satta Matka</strong> result —
            Kalyan Matka, Milan Day Night, Rajdhani Day Night, Main Bazar, Time
            Bazar and 50+ markets — all updated daily at lightning speed, 100%
            free. Get live Kalyan Matka result, DPBoss 143 guessing, free{" "}
            <strong>Matka Guessing Forum</strong>, complete Jodi Chart and Panel
            Chart records from 1974 to 2026, Morning Syndicate result, Syndicate
            Night result, Date Fix Matka and weekly jodi predictions —
            everything in one place. No login. No payment. Always free. India's
            most complete <strong>Satta Matka</strong> platform — 50+ markets,
            68+ chart records, active guessing forum and expert fix jodi tips.
            We also provide Morning Syndicate and Matka Bazar Syndicate Night
            results directly from the Matka industry. Receive weekly game
            updates, Date Fix information and a free Matka Number Guessing
            Formula. Visit us daily for the fastest Matka tips and tricks.
            Bookmark this site for easy access. Thank you!
          </p>
        </main>
      </div>
      <LuckyNumberCard
        ankValues={["0", "3", "6", "8"]}
        finalAnkValues={["K-7", "M-9"]}
      />
      <LiveUpdate
        updates={[
          { market: "RAJDHANI NIGHT", result: "150-63-300" },
          { market: "KALYAN NIGHT", result: "117-94-257" },
        ]}
      />
      <AppDownloadBanner />
      <LiveResultList results={liveResultsData} />
      <SupportCard />
      <ForumSection
        title="MEMBER'S FORUM AND FREE SATTA MATKA ZONE"
        topics={forumData}
      />
      <InfoSectionQnA />
      <footer className="main-footer">
        <Banner
          title="!! Disclaimer !!"
          content={`
                  यह वेबसाइट <span>(SattaMatkaDpboss.Mobi)</span> केवल मनोरंजन और सूचना के उद्देश्य के लिए है। 
                  हम किसी भी अवैध सट्टा मटका व्यवसाय से नहीं जुड़े हैं। यहाँ दिखाए गए सभी परिणाम इंटरनेट पर उपलब्ध डेटा पर आधारित हैं। 
                  हम जुए या सट्टा खेलने का समर्थन नहीं करते हैं। कृपया अपने देश के कानूनों का पालन करें। 
                  किसी भी लाभ या हानि के लिए आप स्वयं जिम्मेदार होंगे।
                  <br>
                  <span>Note: This site is for educational purposes only. View at your own risk.</span>
                `}
          background="linear-gradient(135deg, #fff, #fff)"
          borderColor="#3d5afe"
          titleColor="#d32f2f"
        />

        <Banner
          title="Satta Matka DPBoss: सबसे तेज़ लाइव अपडेट"
          content={`
                  यदि आप इंटरनेट पर सबसे तेज़ कल्याण मटका रिजल्ट और DPBoss गेसिंग खोज रहे हैं, तो आप सही जगह पर हैं। 
                  हमारी वेबसाइट आपको मिलन डे, मिलन नाइट, राजधानी, और मेन बाजार जैसे सभी मार्केट के परिणाम बिना किसी देरी के प्रदान करती है।
                `}
          background="linear-gradient(135deg, #fff9c4 0, #fbc02d 100%)"
          borderColor="#fbc02d"
          titleColor="#b71c1c"
        />
        <RatingCard />
        <OwnerCard />
        <FloatingButton />
      </footer>
    </>
  );
};

export default Home;
