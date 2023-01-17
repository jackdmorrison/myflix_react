import { Route, Routes, BrowserRouter, useParams} from 'react-router-dom';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import Validate from './validate'

import Catalogue from './Catalogue'
import Login from './login'
import Player from './player'
import Signup from './signup'
function App() {
  let {id}= useParams()
  // const [token, setToken] = useState();
  // if(!token){
  //   return <Login setToken={setToken}/>;
  // }
  try{
    var user= JSON.parse(localStorage.getItem('user'))
  }
  catch(e){
    return (< Login />)
  }
  console.log(user.valid)
  if(user.valid==="Yes"){
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Catalogue/>}/>
            <Route exact path='/login' element={< Login />}/>
            <Route exact path='/signup' element={< Signup />}/>
            <Route exact path='/catalogue' element={<Catalogue/>} />
            <Route exact path='/video/:id' element={<Player/>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
  );
  }
  else{
    return (< Login />)
  }
  
}
export default App;