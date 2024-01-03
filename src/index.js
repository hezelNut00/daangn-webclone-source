import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import rootReducer, { rootSaga } from "./modules";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

// IfBrowserRoutereasuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
