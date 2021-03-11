import React from 'react';
import YandexMap from '../yandex-map/yandex-map';

const Contacts = () => {
  return (
    <div className="tab-bars__contacts contacts">
      <ul className="contacts__list">
        <li className="contacts__item">
          <span className="contacts__title">Адрес</span>
          <address className="contacts__text">
            Санкт-Петербург, набережная&nbsp;реки&nbsp;Карповки, дом 5
          </address>
        </li>
        <li className="contacts__item">
          <span className="contacts__title">Режим работы</span>
          <span className="contacts__text">Ежедневно, с 10:00 до 21:00</span>
        </li>
        <li className="contacts__item">
          <span className="contacts__title">Телефон</span>
          <a href="tel:8800333-55-99" className="contacts__text">
            8 (800) 333-55-99
          </a>
        </li>
        <li className="contacts__item">
          <span className="contacts__title">E-mail</span>
          <a href="mailto:info@avto-moto.ru" className="contacts__text">
            info@avto-moto.ru
          </a>
        </li>
      </ul>
      <YandexMap />
    </div>
  );
};

export default Contacts;
