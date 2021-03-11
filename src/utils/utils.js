import moment from 'moment';
import 'moment/locale/ru';
import { RatingStatus } from '../utils/const';

export const getDate = () => {
  return moment().format();
};

export const humanizeDate = (date) => {
  return moment(date).fromNow();
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getRecommendation = (rating) => {
  return rating > RatingStatus.MIN_VALUE
    ? RatingStatus.POSITIVE
    : RatingStatus.NEGATIVE;
};
