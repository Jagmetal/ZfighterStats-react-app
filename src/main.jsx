import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';
import rootReducer from './reducers';
import { addCharacterById } from './actions';


const store = createStore(rootReducer);

console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store', store.getState()));

store.dispatch(addCharacterById(0));

ReactDOM.render(
    <Provider store={store}> {/* Wrap your App component with Provider */}
        <App />
    </Provider>,
    document.getElementById('root')
);
