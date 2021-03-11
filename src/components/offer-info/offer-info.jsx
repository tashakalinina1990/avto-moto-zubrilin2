import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const OfferInfo = ({ name, price, oldPrice, feauteres, creditPrice }) => {
  const feauteresList = feauteres.map((item, index) => (
    <li className="info__feauteres-item" key={`${index}-${item}`}>
      {item}
    </li>
  ));

  return (
    <section className="offer__info info">
      <h2 className="info__title">{name}</h2>
      <ul className="info__feauteres-list">{feauteresList}</ul>
      <div className="info__price-block">
        <span className="info__current-price">{price} &#8381;</span>
        <span className="info__old-price">{oldPrice} &#8381;</span>
      </div>
      <a className="info__request button" href="/">
        оставить заявку
      </a>
      <a className="info__credit button button--white" href="/">
        В КРЕДИТ ОТ {creditPrice} &#8381;
      </a>
    </section>
  );
};

OfferInfo.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  creditPrice: PropTypes.string.isRequired,
  feauteres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ cars }) => {
  const { name, price, oldPrice, feauteres, creditPrice } = cars;
  return { name, price, oldPrice, feauteres, creditPrice };
};

export { OfferInfo };
export default connect(mapStateToProps)(OfferInfo);
