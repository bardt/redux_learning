import store from './store';
import React from 'react';
import Root from './components/root'

function renderUI(state) {
    React.render(Root({ state: state }), document.getElementById('root'));
}

store.subscribe(renderUI);
renderUI(store.getState());
