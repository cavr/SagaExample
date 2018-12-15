import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';
import mySaga from './sagas/sagas';


const sagaMiddleWate = createSagaMiddleWare();
const store = createStore(reducers, {}, applyMiddleware(thunk, sagaMiddleWate));
sagaMiddleWate.run(mySaga);

export default store;