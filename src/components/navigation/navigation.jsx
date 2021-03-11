import React from 'react';

const Navigation = ({ navLinks, mod }) => {
  return (
    <nav className={`nav ${mod ? `nav${mod}` : ``}`}>
      <ul className="nav__list ">
        {navLinks.map((item, index) => (
          <li className="nav__item" key={`${index}-${item}`}>
            <a href="/">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
