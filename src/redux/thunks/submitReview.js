import { reviewPending, reviewSubmittedSuccessfully, setReview } from '../actionCreators';

export default function submitReview(inputs) {
  return async (dispatch) => {
    dispatch(reviewPending());
    await new Promise((resolve) => { setTimeout(resolve, 1000); });
    dispatch(setReview(inputs));
    dispatch(reviewSubmittedSuccessfully());
  };
}
