import { Route, Routes, BrowserRouter} from 'react-router-dom';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Validate from './validate'
import Catalogue from './Catalogue'
import Login from './login'
import Player from './player'
function App() {
  // const [token, setToken] = useState();
  // if(!token){
  //   return <Login setToken={setToken}/>;
  // }
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Validate/>}/>
            <Route exact path='/login' element={< Login />}/>
            <Route exact path='/catalogue' element={<Catalogue/>} />
            <Route exact path='/video/:id' element={<Player/>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
  );
}
export default App;