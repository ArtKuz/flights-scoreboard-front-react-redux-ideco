import { expect } from '../test_helper';
import UserReducer from '../../src/reducers/reducerUser';
import { LOGIN } from '../../src/actions/userActions';

describe('Тестируем User Reducer' , () => {
    it('Action не известного type', () => {
        expect(UserReducer(undefined, {})).to.eql({
            name: 'Гость',
            isAuthenticated: false
        });

    });

    it('Action.type == LOGIN', () => {
        const action = { type: LOGIN, payload: { name: 'Администратор' } };
        expect(UserReducer({}, action)).to.eql({
            name: 'Администратор',
            isAuthenticated: true
        });
    });
});
