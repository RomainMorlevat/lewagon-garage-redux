import { CAR_CREATED, FETCH_CARS } from '../actions/';

export default function(state = [], action) {
  switch (action.type) {
    case CAR_CREATED:
      return state;
    case FETCH_CARS:
      return action.payload;
    default:
      return state;
  }
}
