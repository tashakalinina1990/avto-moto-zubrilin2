import { ActionType } from './actions';
import { extend } from '../utils/utils';
import { CARS } from '../mocks/car';
import { REVIEWS } from '../mocks/review';

const initialState = {
  cars: CARS,
  reviews: REVIEWS,
  isModalOpen: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_REVIEWS:
      const newReviews = [action.payload, ...state.reviews.slice()];
      return extend(state, {
        reviews: newReviews,
      });
    case ActionType.IS_MODAL_OPEN:
      return extend(state, {
        isModalOpen: action.payload,
      });
    default:
      return state;
  }
};
