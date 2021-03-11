export const ActionType = {
  UPDATE_REVIEWS: `UPDATE_REVIEWS`,
  IS_MODAL_OPEN: `IS_MODAL_OPEN`,
};

export const updateReviews = (review) => ({
  type: ActionType.UPDATE_REVIEWS,
  payload: review,
});

export const setIsModalOpen = (setFlag) => ({
  type: ActionType.IS_MODAL_OPEN,
  payload: setFlag,
});
