import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import SearchPage from './containers/SearchPage/SearchPage';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers/';
import { Provider } from 'react-redux';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


ReactDOM.render(
  <Provider store={store}>
    <SearchPage
      history={window.history}
      location={window.location}
    />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
