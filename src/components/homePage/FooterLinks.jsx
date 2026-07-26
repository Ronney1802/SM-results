import React from "react";
import "../../styles/homePage/FooterLinks.css";

const FooterLinks = ({ linkGroups }) => {
  return (
    <div className="footer-links-wrapper">
      {linkGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="nav-links">
          {group.map((link, linkIndex) => (
            <React.Fragment key={linkIndex}>
              <a href={link.href}>{link.label}</a>
              {linkIndex < group.length - 1 && (
                <span className="nav-separator">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
