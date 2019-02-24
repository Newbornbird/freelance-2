import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage,
  // stateReconciler: hardSet,
  whitelist: [ 'authorization' ]
}

// const store = createStore(rootReducer, applyMiddleware(thunk));

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>    
  </Provider>,
    document.getElementById('root'));
