import "../../styles/homePage/Banner.css";

const Banner = ({
  title,
  content,
  background = "linear-gradient(135deg, #fff, #f9f9f9)",
  borderColor = "#ccc",
  titleColor = "#d32f2f",
}) => {
  return (
    <div
      className="footer-container banner-box"
      style={{ background, border: `1px solid ${borderColor}` }}
    >
      <h2 className="banner-title" style={{ color: titleColor }}>
        {title}
      </h2>
      <p
        className="banner-text"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Banner;
