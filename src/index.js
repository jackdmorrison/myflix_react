import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const handleLogout=()=>{
  localStorage.setItem('user', JSON.stringify({'valid':'No','sub': 'none'}));
}
// var login=(<a href="/login" ><button type="button" href="/login" className="btn btn-outline-dark me-2">Login</button></a>)
// try{if(JSON.parse(localStorage.getItem('user')).valid==="Yes"){
//   login=(<a href="/login" ><button type="button" href="/login" className="btn btn-outline-dark me-2">Logout</button></a>)
// }}catch(e){console.log(e)}
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <img href="MyFlix.png" />
          
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/"className="nav-link px-1 text-danger"><h2>MyFlix</h2></a></li>
          <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="/catalogue" className="nav-link px-2 text-white">Catalogue</a></li>
          </ul>

          <div className="text-end">
          <a href="/login" ><button type="button" href="/login" onClick={handleLogout} className="btn btn-outline-dark me-2">Logout</button></a>
          <button type="button" className="btn btn-warning">Sign-up</button>
          </div>
      </div>
      <App />
    </div>
  </React.StrictMode>
);


