import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setIsModalOpen, updateReviews } from '../../store/actions';
import { extend, getDate } from '../../utils/utils';
import { RATING_STARS, ESC_CODE } from '../../utils/const';

const Modal = ({ isOpen, onChangeFlagIsModalOpen, updateReviewsDispatch }) => {
  const [review, setReview] = useState({
    authorName: ``,
    advantage: ``,
    disadvantage: ``,
    rating: ``,
    comment: ``,
    date: getDate(),
  });

  const { authorName, advantage, disadvantage, rating, comment } = review;

  const inputName = React.useRef();
  useEffect(() => {
    if (isOpen) {
      inputName.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem(
      `review`,
      JSON.stringify({ authorName, advantage, disadvantage, rating, comment })
    );
  }, [authorName, advantage, disadvantage, rating, comment]);

  const [isValidName, setIsValidName] = useState(true);
  const [isValidComment, setIsValidComment] = useState(true);

  const onEscButtonPress = (evt) => {
    if (evt.keyCode === ESC_CODE) {
      evt.preventDefault();
      onChangeFlagIsModalOpen(false);
      document.removeEventListener(`keydown`, onEscButtonPress);
    }
  };

  const onModalCloseClick = (evt) => {
    evt.preventDefault();
    onChangeFlagIsModalOpen(false);
    document.removeEventListener(`keydown`, onEscButtonPress);
  };

  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;

    setReview(extend(review, { [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!authorName) {
      setIsValidName(false);
      return;
    }

    if (!comment) {
      setIsValidComment(false);
      return;
    }

    updateReviewsDispatch(review);
    setReview(() => {
      return {
        authorName: ``,
        advantage: ``,
        disadvantage: ``,
        rating: ``,
        comment: ``,
        date: getDate(),
      };
    });

    onModalCloseClick(evt);
  };

  const isInvalidError = (isValid) => {
    return isValid
      ? `form__required`
      : `form__required form__required--invalid`;
  };

  const ratingInputTemlate = () => {
    return (
      <div className="form__rating">
        {RATING_STARS.map((value) => {
          return (
            <Fragment key={`${value}-stars`}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={(evt) => {
                  handleFieldChange(evt);
                }}
                checked={rating === value}
              />
              <label
                htmlFor={`${value}-stars`}
                className="form__rating-label"
                title={`${value}-stars`}
              >
                <svg
                  className="form__star-image"
                  width="27"
                  height="25"
                  viewBox="0 0 27 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z" />
                </svg>
              </label>
            </Fragment>
          );
        })}
        <p className="form__rating-title">Оцените товар:</p>
      </div>
    );
  };

  document.addEventListener(`keydown`, onEscButtonPress);

  return (
    <section
      className={`modal ${isOpen ? `modal--show` : ``}`}
      onClick={onModalCloseClick}
    >
      <div
        className="modal__review"
        onClick={(evt) => {
          evt.stopPropagation();
        }}
      >
        <h2 className="modal__title">Оставить отзыв</h2>
        <form
          className="modal__form form"
          action="#"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="form__left">
            <div className={isInvalidError(isValidName)}>
              <label className="visually-hidden" htmlFor="authorName">
                Ваше имя
              </label>
              <input
                ref={inputName}
                className={`form__input ${
                  isValidName ? `` : `form__input--invalid`
                }`}
                type="text"
                name="authorName"
                id="authorName"
                placeholder="Имя"
                value={authorName}
                onChange={(evt) => {
                  setIsValidName(true);
                  handleFieldChange(evt);
                }}
              />
            </div>
            <label className="visually-hidden" htmlFor="advantage">
              Достоинства
            </label>
            <input
              className="form__input"
              type="text"
              name="advantage"
              id="advantage"
              placeholder="Достоинства"
              onChange={handleFieldChange}
              value={advantage}
            />
            <label className="visually-hidden" htmlFor="disadvantage">
              Недостатки
            </label>
            <input
              className="form__input"
              type="text"
              name="disadvantage"
              id="disadvantage"
              placeholder="Недостатки"
              onChange={handleFieldChange}
              value={disadvantage}
            />
          </div>
          <div className="form__right">
            {ratingInputTemlate()}
            <div className={isInvalidError(isValidComment)}>
              <label className="visually-hidden" htmlFor="comment">
                Комментарий
              </label>
              <textarea
                className={`form__input form__input--textarea ${
                  isValidComment ? `` : `form__input--invalid`
                }`}
                id="comment"
                name="comment"
                placeholder="Комментарий"
                onChange={(evt) => {
                  setIsValidComment(true);
                  handleFieldChange(evt);
                }}
                value={comment}
              />
            </div>
          </div>
          <button className="form__submit button" type="submit" disabled="">
            оставить отзыв
          </button>
        </form>
        <button
          className="modal__close"
          type="button"
          aria-label="Закрыть"
          onClick={onModalCloseClick}
        >
          <span className="visually-hidden">Закрыть</span>
        </button>
      </div>
    </section>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onChangeFlagIsModalOpen: PropTypes.func.isRequired,
  updateReviewsDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onChangeFlagIsModalOpen(flag) {
    dispatch(setIsModalOpen(flag));
  },
  updateReviewsDispatch(review) {
    dispatch(updateReviews(review));
  },
});

export { Modal };
export default connect(null, mapDispatchToProps)(Modal);
