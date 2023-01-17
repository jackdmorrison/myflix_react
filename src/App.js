import { Route, Routes, BrowserRouter, useParams} from 'react-router-dom';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import Validate from './validate'

import Catalogue from './Catalogue'
import Login from './login'
import Player from './player'
function App() {
  let {id}= useParams()
  // const [token, setToken] = useState();
  // if(!token){
  //   return <Login setToken={setToken}/>;
  // }
  if(localStorage.getItem('user')!=true){
    return (< Login />)
  }
  else if(JSON.parse(localStorage.getItem('user')).valid==="No"){
    return (< Login />)
  }
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Catalogue/>}/>
            <Route exact path='/login' element={< Login />}/>
            <Route exact path='/catalogue' element={<Catalogue/>} />
            <Route exact path='/video/:id' element={<Player/>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
  );
}
export default App;