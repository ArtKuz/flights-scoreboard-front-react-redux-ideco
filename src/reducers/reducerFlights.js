import { FETCH_FLIGHTS, FETCH_FLIGHT, FETCH_FLIGHTS_CITIES, DELETE_FLIGHT } from '../actions/flightsActions';

const INITIAL_STATE = {
    all: [],
    flight: null,
    cities: {}
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_FLIGHTS:
        case DELETE_FLIGHT:
            return { ...state, all: action.payload.data };
        case FETCH_FLIGHT:
            return { ...state, flight: action.payload.data };
        case FETCH_FLIGHTS_CITIES:
            return { ...state, cities: action.payload };
        default:
            return state;
    }
}