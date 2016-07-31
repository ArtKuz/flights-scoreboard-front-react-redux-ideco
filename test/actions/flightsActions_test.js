import { expect } from '../test_helper';
import { FETCH_FLIGHTS, fetchFlights } from '../../src/actions/flightsActions';

describe('Тестируем Flights Actions' , () => {
    describe('fetchFlights' , () => {
        it('Проверка корректного типа', () => {
            const action = fetchFlights();
            expect(action.type).to.equal(FETCH_FLIGHTS);
        });

        it('Загрузить список всех рейсов возвращает promise', () => {
            const action = fetchFlights();
            expect(action.payload).to.be.a('promise');
        });
    });
});
