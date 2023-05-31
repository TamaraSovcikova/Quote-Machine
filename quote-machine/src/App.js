import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
//import { useSelector } from 'react-redux';


function App() {
  //const quotes = useSelector((state) => state.quotes); 
  return (
    <Provider store={store}>
      <div id="quote-box">
        <p id="text">fsfsefsefsefsdfhrdefs</p>
        <p id="author">fjjjysef</p>
        <button id="new-quote">New Quote</button>
        <div id="social-icons">
          <a id="tweet-quote" href="temp">Tweet</a>
        </div>
      </div>
    </Provider> 
  );
}

export default App;
