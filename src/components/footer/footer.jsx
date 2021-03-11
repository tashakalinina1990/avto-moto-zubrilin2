import React from 'react';
import Navigation from '../navigation/navigation';
import { FOOTER_LINKS } from '../../utils/const';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Navigation navLinks={FOOTER_LINKS} mod={`--footer`} />
      </div>
    </footer>
  );
};

export default Footer;
