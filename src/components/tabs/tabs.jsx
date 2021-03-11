import React, { useState } from 'react';
import { TAB_ITEMS } from '../../utils/const';
import Contacts from '../contacts/contacts';
import Properties from '../properties/properties';
import Reviews from '../reviews/reviews';

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const buttonItems = TAB_ITEMS.map((item, index) => (
    <button
      key={`${index}-${item}`}
      className={`tab-bars__button ${
        activeTabIndex === index ? `tab-bars__button--active` : ``
      }`}
      onClick={() => setActiveTabIndex(index)}
    >
      {item}
    </button>
  ));

  const getTabItem = () => {
    switch (activeTabIndex) {
      case 0:
        return <Properties />;
      case 1:
        return <Reviews />;
      case 2:
        return <Contacts />;
      default:
        return ``;
    }
  };

  return (
    <section className="tab-bars">
      <div className="tab-bars__wrapper">
        <div className="tab-bars__buttons">{buttonItems}</div>
        {getTabItem()}
      </div>
    </section>
  );
};

export default Tabs;
