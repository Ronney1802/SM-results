import React from "react";
import "../../styles/homePage/FooterLinks.css";
import { Link } from "react-router-dom";

const FooterLinks = ({ linkGroups }) => {
  return (
    <div className="footer-links-wrapper">
      {linkGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <hr className="footer-links-divider" />
          <div className="nav-links">
            {group.map((link, linkIndex) => (
              <React.Fragment key={linkIndex}>
                <Link to={link.to}>{link.label}</Link>
                {linkIndex < group.length - 1 && (
                  <span className="nav-separator">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
