import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import App from './App';



// store.dispatch({
//   type: 'NEW_NOTE',
//   data: {
//     content: 'the app state is in redux store',
//     important: true,
//     id: 1
//   }
// })

// store.dispatch({
//   type: 'NEW_NOTE',
//   data: {
//     content: 'state changes are made with actions',
//     important: false,
//     id: 2
//   }
// })


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
