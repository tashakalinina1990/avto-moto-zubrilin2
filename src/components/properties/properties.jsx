import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Properties = ({
  transmission,
  power,
  engineType,
  drive,
  engineVolume,
  maxTorque,
  cylinders,
}) => {
  return (
    <div className="tab-bars__properties properties">
      <ul className="properties__list">
        <li className="properties__item">
          <span className="properties__item-label">Трансмиссия</span>
          <span className="properties__item-value">{transmission}</span>
        </li>
        <li className="properties__item">
          <span className="properties__item-label">
            Мощность двигателя, л.с.
          </span>
          <span className="properties__item-value">{power}</span>
        </li>
        <li className="properties__item">
          <span className="properties__item-label">Тип двигателя</span>
          <span className="properties__item-value">{engineType}</span>
        </li>
        <li className="properties__item">
          <span className="properties__item-label">Привод</span>
          <span className="properties__item-value">{drive}</span>
        </li>
        <li className="properties__item">
          <span className="properties__item-label">Объем двигателя, л</span>
          <span className="properties__item-value">{engineVolume}</span>
        </li>

        <li className="properties__item">
          <span className="properties__item-label">Макс. крутящий момент</span>
          <span className="properties__item-value">{maxTorque}</span>
        </li>
        <li className="properties__item">
          <span className="properties__item-label">Количество цилиндров</span>
          <span className="properties__item-value">{cylinders}</span>
        </li>
      </ul>
    </div>
  );
};

Properties.propTypes = {
  transmission: PropTypes.string.isRequired,
  power: PropTypes.number.isRequired,
  engineType: PropTypes.string.isRequired,
  drive: PropTypes.string.isRequired,
  engineVolume: PropTypes.number.isRequired,
  maxTorque: PropTypes.string.isRequired,
  cylinders: PropTypes.string.isRequired,
};

const mapStateToProps = ({ cars }) => {
  const {
    transmission,
    power,
    engineType,
    drive,
    engineVolume,
    maxTorque,
    cylinders,
  } = cars;
  return {
    transmission,
    power,
    engineType,
    drive,
    engineVolume,
    maxTorque,
    cylinders,
  };
};

export { Properties };
export default connect(mapStateToProps)(Properties);
