const BASE_URL = 'https://wagon-garage-api.herokuapp.com/';
const API_KEY = 'romain_m';

export const CAR_CREATED = 'CAR_CREATED';
export const CAR_DELETED = 'CAR_DELETED';
export const FETCH_CAR = 'FETCH_CAR';
export const FETCH_CARS = 'FETCH_CARS';

export function createCar(body, callback) {
  const request = fetch(`${BASE_URL}${API_KEY}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: CAR_CREATED,
    payload: request
  };
}

export function fetchCars() {
  const promise = fetch(`${BASE_URL}${API_KEY}/cars`)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const promise = fetch(`${BASE_URL}${API_KEY}/cars/${id}`)
    .then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function deleteCar(car, callback) {
  fetch(`${BASE_URL}cars/${car.id}`, {
    method: 'DELETE',
  }).then(response => response.json())
    .then(callback);

  return {
    type: CAR_DELETED,
    payload: car
  };
}
