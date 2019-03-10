import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { App } from './App';
import { appReducer } from './modules';

const store = createStore(appReducer);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App/></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
