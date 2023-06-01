import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { connect } from 'react-redux';
import { changeQuote } from './redux/store';
import { useState } from 'react';


function App({quotes, changeQuote}) {
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const currentQuote = quotes.currentQuote;

  const handleNewQuote = () => {
    setFadeOut(true);
    setTimeout(() => {
      changeQuote();
      setFadeOut(false);
      setFadeIn(true);
      setTimeout(() => {
        setFadeIn(false);
      }, 500);
    }, 500);
  };

  return (
     <Provider store={store}>
      <div className= "d-flex justify-content-center align-items-center">
        <div className="container myp-10">
          <div className="row auto justify-content-md-center">
            <div className="col">
              <div className={`container myp-10 ${fadeIn ? 'fade-in' : ''}`}>
                <p id="quote-text" className={`lead ${fadeIn ? 'fade-in' : ''}`} style={{  fontSize: '30px', wordWrap: 'break-word'}}>
                <i id="quote-icon"className="fas fa-quote-left fa-1x text-primary" style={{ marginRight: '0.8rem' }}></i>
                  {currentQuote ? currentQuote.text : 'Press The button To Generate A Quote'}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-end">
              <p className={`lead ${fadeIn ? 'fade-in' : ''}`} id="author">{currentQuote && currentQuote.author ? `- ${currentQuote.author}` : ''}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
               <div id="social-icons" className="flex justify-content-start">
                <a id="instagram-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="custom-anchor btn">
                  <i className="fab fa-instagram fa-lg text-white"></i> 
                </a>
                <a id="github-link" href="https://github.com/" target="_blank" rel="noopener noreferrer" className="custom-anchor btn">
                  <i className="fab fa-github fa-lg text-white"></i> 
                </a>
              </div>
            </div>
            <div className="col text-end">
              <button onClick={handleNewQuote} id="new-quote" className="custom-button btn">New Quote</button>
            </div>
          </div>
        </div>
      </div>
        <p id="footer-text" className="d-flex justify-content-center align-items-center" style={{  margin: '10px'}}>by Tamara</p>
    </Provider>
  );
}
const mapStateToProps = (state) => {
  return {
    quotes: state,
  };
};


export default connect(mapStateToProps, { changeQuote })(App);


