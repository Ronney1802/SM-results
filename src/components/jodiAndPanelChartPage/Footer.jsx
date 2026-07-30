import { Link } from "react-router-dom";
import "../../styles/jodiAndPanelChartPage/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link to={"/"} title="satta matka">
        <span className="home">Home</span>
      </Link>
      |
      <Link
        to={"satta-matka-guessing-forum"}
        title="Satta matka guessing forum"
      >
        <span className="guessing">Matka Guessing</span>
      </Link>
      |
      <Link to={"satta-matka-chart"} title="Satta matka chart">
        <span className="chart">Matka Chart</span>
      </Link>
      |
      <Link to={"online-matka-play"} title="Matka Play">
        <span className="play">Matka Play</span>
      </Link>
      |
      <Link to={"tara-matka-mumbai"} title="Tara Matka">
        <span className="tara">Tara Matka</span>
      </Link>
      |
      <Link to={"fix-matka-number"} title="Fix Matka">
        <span className="fix">Fix Matka</span>
      </Link>
      |
      <Link to={"sitemap"} title="Sitemap">
        <span className="sitemap">Sitemap</span>
      </Link>
      <hr />
      <div className="vemo2">
        <a href="https://example.com">SattaMatkaDpboss.Mobi</a>
      </div>
      ALL RIGHTS RESERVED (2012-2026)
      <br />
      SITE OWNER:-
      <br />
      <u>PRO. BIG BOSS SIR</u>
      <br />
      <div className="vemo">08829959562</div>
      <p style={{ marginTop: 0, marginBottom: 0 }}>
        <b>
          https://sattamatkadpboss.mobi
          {/* <img src="/icon/137.gif" width="10" height="10" alt="Satta Matka" /> */}
        </b>
      </p>
    </div>
  );
};

export default Footer;
