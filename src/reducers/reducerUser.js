import { LOGIN, LOGOUT } from '../actions/userActions';

const INITIAL_STATE = {
    name: 'Гость',
    isAuthenticated: false
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, name: action.payload.name, isAuthenticated: true };
        case LOGOUT:
            return { ...state, name: action.payload.name, isAuthenticated: false };
        default:
            return state;
    }
}