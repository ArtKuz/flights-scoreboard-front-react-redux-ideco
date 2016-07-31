import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk'
//import createLogger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'

export default function configureStore() {

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer)
        });
    }

    return store
}
const store = compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(promise)
)(createStore)(rootReducer);
