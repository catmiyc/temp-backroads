import React from 'react';
import PageLink from './PageLink';
import SocialLink from './SocialLink';
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLink ulClass="footer-links" liClass="footer-link" />
      <SocialLink ulClass="footer-icons" liClass="footer-icon" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
