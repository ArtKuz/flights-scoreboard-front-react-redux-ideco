import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import FlightsReducer from './reducerFlights.js';
import UserReducer from './reducerUser.js';

const rootReducer = combineReducers({
    form: formReducer,
    flights: FlightsReducer,
    user: UserReducer
});

export default rootReducer;