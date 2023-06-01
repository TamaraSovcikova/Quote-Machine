import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
//import { useSelector } from 'react-redux';


function App() {
  //const quotes = useSelector((state) => state.quotes); 
  return (
     <Provider store={store}>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="container myp-10">
          <div className="row auto justify-content-md-center">
            <div className="col">
              <div className="d-flex align-items-start">
                <p id="quote-text" className="lead" style={{  fontSize: '30px', wordWrap: 'break-word'}}>
                <i id="quote-icon"className="fas fa-quote-left fa-1x text-primary" style={{ marginRight: '0.8rem' }}></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, vero iusto et sequi nulla, iuredawd, awdapw hawjd wdjahk d aw jwahd.
                </p>
              </div>
            </div>
          </div>


          <div class="row">
            <div class="col text-end">
              <p id="author">Sam Smith</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
               <div id="social-icons" class="d-flex justify-content-start">
                <a id="instagram-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="btn btn-info">
                  <i class="fab fa-instagram fa-lg text-white"></i> 
                </a>
                <a id="github-link" href="https://github.com/" target="_blank" rel="noopener noreferrer" class="btn btn-info">
                  <i class="fab fa-github fa-lg text-white"></i> 
                </a>
              </div>
            </div>
            <div class="col text-end">
              <button id="new-quote" className="btn btn-primary">New Quote</button>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
