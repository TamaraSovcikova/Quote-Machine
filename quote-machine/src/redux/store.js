import { createStore } from 'redux';

const initialState = {
    quotes: [
        {text: 'blurb', author: '1'},
        {text: 'blurb', author: '1'},
        {text: 'blurb', author: '1'},
        {text: 'blurb', author: '1'},
        {text: 'blurb', author: '1'},
        {text: 'blurb', author: '1'},
        {text: 'blurb', author: '1'},
    ],
};

const quoteReducer = (state = initialState, action) => {
    switch (action.type)
    {
        default: return state;
    }
};

const store = createStore(quoteReducer);

export default store;
