import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setIsModalOpen } from '../../store/actions';
import { RATING_STARS } from '../../utils/const';
import { humanizeDate, getRecommendation } from '../../utils/utils';

const Reviews = ({ onChangeFlagIsModalOpen, reviews }) => {
  const reviewItem = reviews.map((review, index) => {
    const {
      authorName,
      advantage,
      disadvantage,
      comment,
      rating,
      date,
    } = review;

    const ratingTemlate = RATING_STARS.map((item) => {
      return (
        <svg
          className={`reviews__stars-image ${
            rating >= item || rating !== ``
              ? `reviews__stars-image reviews__stars-image--red`
              : ``
          }`}
          key={`${item}`}
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.369 0l1.879 5.873h6.08l-4.92 3.63 1.88 5.874-4.92-3.63-4.918 3.63 1.879-5.874-4.92-3.63h6.08L8.37 0z"
            fill={rating >= item ? `#D12136` : `#BDBEC2`}
            fillOpacity={rating >= item ? `1` : `.7`}
          />
        </svg>
      );
    });

    return (
      <li className="reviews__item" key={`${authorName}-${index}`}>
        <span className="reviews__user-name">{authorName}</span>

        {advantage && (
          <div className="reviews__comment reviews__comment--advantages">
            <span className="reviews__title">Достоинства</span>
            <span className="reviews__text">{advantage}</span>
          </div>
        )}

        {disadvantage && (
          <div className="reviews__comment reviews__comment--disadvantages">
            <span className="reviews__title">Недостатки</span>
            <span className="reviews__text">{disadvantage}</span>
          </div>
        )}
        <div className="reviews__comment">
          <span className="reviews__title">Комментарий</span>
          <span className="reviews__text">{comment}</span>
        </div>

        {rating && (
          <div className="reviews__rating">
            <span className="reviews__stars">{ratingTemlate}</span>
            <span className="reviews__recommendation">
              {getRecommendation(rating)}
            </span>
          </div>
        )}

        <div className="reviews__date">
          <span className="reviews__date-time">{humanizeDate(date)}</span>
          <a href="/" className="reviews__response">
            Ответить
          </a>
        </div>
      </li>
    );
  });

  return (
    <div className="tab-bars__reviews reviews">
      <button
        type="button"
        className="reviews__button button button--white"
        onClick={(evt) => {
          evt.preventDefault();
          onChangeFlagIsModalOpen(true);
        }}
      >
        оставить отзыв
      </button>
      <ul className="reviews__list">{reviewItem}</ul>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      authorName: PropTypes.string.isRequired,
      advantage: PropTypes.string.isRequired,
      disadvantage: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = ({ reviews }) => {
  return {
    reviews,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeFlagIsModalOpen(flag) {
    dispatch(setIsModalOpen(flag));
  },
});

export { Reviews };
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
