import { CAR_CREATED, CAR_DELETED, FETCH_CAR, FETCH_CARS } from '../actions/';

export default function(state = [], action) {
  switch (action.type) {
    case CAR_CREATED:
      return state;
    case CAR_DELETED:
      return state.filter(car => car !== action.payload);
    case FETCH_CAR:
      return [action.payload];
    case FETCH_CARS:
      return action.payload;
    default:
      return state;
  }
}
