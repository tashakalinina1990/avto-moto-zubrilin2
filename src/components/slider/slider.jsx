import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Slider = ({ images, previewImages, isNewModel }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { image, description } = images[activeIndex];

  const previewImagesList = previewImages.map(
    ({ image, description }, index) => (
      <li className="slider__preview-item" key={index}>
        <img src={image} width="128" height="80" alt={description} />
      </li>
    )
  );

  return (
    <section className="offer__slider slider">
      <h2 className="visually-hidden">Слайдер. Изображение автомобиля</h2>
      <div
        className={`slider__image ${
          isNewModel ? 'slider__image--new-model' : ''
        }`}
      >
        <img src={image} width="600" height="375" alt={description} />
      </div>
      <div className="slider__nav">
        <button
          className="slider__button button-arrow button-arrow--left"
          type="button"
          aria-label="Стрелка влево.Пререключение слайдера."
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex(activeIndex - 1)}
        />
        <ul className="slider__preview-list">{previewImagesList}</ul>
        <button
          className="slider__button button-arrow"
          type="button"
          aria-label="Стрелка вправо.Пререключение слайдера."
          disabled={activeIndex === images.length - 1}
          onClick={() => setActiveIndex(activeIndex + 1)}
        />
      </div>
    </section>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  previewImages: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  isNewModel: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ cars }) => {
  const { images, previewImages, isNewModel } = cars;
  return { images, previewImages, isNewModel };
};

export { Slider };
export default connect(mapStateToProps)(Slider);
