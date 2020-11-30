import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import SearchReducer from './searchReducer/Reducer';
import CharacterReducer from './characterReducer/Reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage, 
};

const rootReducer = combineReducers({
    SearchReducer,
    CharacterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const  persistor = persistStore(store);

export {store, persistor};