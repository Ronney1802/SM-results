// DownloadBanner.jsx
import "../../styles/common/AppDownloadBanner.css";

const AppDownloadBanner = () => {
  return (
    <div className="download-banner">
      <div className="download-banner__text">
        अब मटका खेलना हुआ आसान ! घर बैठे मटका खेलो अब मोबाइल एप्लीकेशन पे और जीतो ढेर सारी धनराशि। अभी डाउनलोड करो।
      </div>

      <div className="download-banner__button">
        <a 
          // href="https://sattamatkadpboss.mobi/app-apna-release.apk" 
          href="#"
          download
        >
          Play Online Matka
        </a>
      </div>

      <div className="download-banner__subtext">
        India's Biggest & Most Trusted
      </div>
    </div>
  );
};

export default AppDownloadBanner;
