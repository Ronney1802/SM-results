import Button from "./Button";
import "../../styles/homePage/FloatingButton.css";

const FloatingButtons = () => {
  return (
    <>
      <div className="floating-btn left">
        {/* Matka Play download link */}
        <a
          href="https://sattamatkadpboss.mobi/app-apna-release.apk"
          download
          className="download-link"
        >
          <Button label="Matka Play" variant="primary" />
        </a>
      </div>

      <div className="floating-btn right">
        {/* Refresh button */}
        <Button
          label="Refresh"
          variant="secondary"
          onClick={() => window.location.reload()}
        />
      </div>
    </>
  );
};

export default FloatingButtons;
