import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import _ from 'lodash';

const mock = new MockAdapter(axios);

export const FETCH_FLIGHTS = 'FETCH_FLIGHTS';
export const FETCH_FLIGHTS_CITIES = 'FETCH_FLIGHTS_CITIES';
export const FETCH_FLIGHT = 'FETCH_FLIGHT';
export const CREATE_FLIGHT = 'CREATE_FLIGHT';
export const DELETE_FLIGHT = 'DELETE_FLIGHT';

const ROOT_URL = 'http://flights-scoreboard.ideco.ru/api';

import fligtsListMock from '../helpers/flightsList'

mock.onGet(`${ROOT_URL}/flights`).reply(200, fligtsListMock);
mock.onPost(`${ROOT_URL}/flight`).reply(201, 'Created');

export function fetchFlights(value, type) {
    let request = axios.get(`${ROOT_URL}/flights`);

    if (!!value && !!type) {
        request = {};
        request.data = _.compact(fligtsListMock.map((flight) => {
            if (flight[type] === value) {
                return flight;
            }
        }));
    }

    return {
        type: FETCH_FLIGHTS,
        payload: request
    };
}

export function fetchFlightsCities() {
    let cities = {};

    cities.arrival_city = _.uniqBy(fligtsListMock, 'arrival_city').map((flight) => {
        return flight.arrival_city;
    });

    cities.departure_city = _.uniqBy(fligtsListMock, 'departure_city').map((flight) => {
        return flight.departure_city;
    });

    return {
        type: FETCH_FLIGHTS_CITIES,
        payload: cities
    };
}

export function createFligth(props) {
    const request = axios.post(`${ROOT_URL}/flight`, props);

    props.id = fligtsListMock[fligtsListMock.length - 1].id + 1;

    fligtsListMock.push(props);

    return {
        type: CREATE_FLIGHT,
        payload: request
    }
}

export function putFligth(id, props) {
    mock.onPut(`${ROOT_URL}/flight/${id}`).reply(200, 'Ok');

    const request = axios.post(`${ROOT_URL}/flight/${id}`, props);

    _.find(fligtsListMock, (flight, key) => {
        if (flight.id == id) {
            props.id = id;
            fligtsListMock[key] = props;
        }
    });


    return {
        type: CREATE_FLIGHT,
        payload: request
    }
}

export function fetchFligth(id) {
    const request = {};

    request.data = _.find(fligtsListMock, (flight) => {
        return flight.id == id;
    });

    return {
        type: FETCH_FLIGHT,
        payload: request
    }
}

export function deleteFligth(id) {
    let deleteKey;

     _.map(fligtsListMock, (flight, key) => {
        if (flight.id == id) {
            deleteKey = key;
        }
    });

    fligtsListMock.splice(deleteKey, 1);

    return {
        type: DELETE_FLIGHT,
        payload: {
            data: fligtsListMock
        }
    }
}