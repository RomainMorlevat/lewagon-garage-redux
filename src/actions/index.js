const BASE_URL = 'https://wagon-garage-api.herokuapp.com/';
const API_KEY = 'romain_m';

export const FETCH_CARS = 'FETCH_CARS';

export function fetchCars() {
  const promise = fetch(`${BASE_URL}${API_KEY}/cars`)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  }
}
