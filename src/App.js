import { Route, Routes, BrowserRouter} from 'react-router-dom';
import {useState} from 'react';
import Catalogue from './Catalogue'
import Login from './login'
function App() {
  // const [token, setToken] = useState();
  // if(!token){
  //   return <Login setToken={setToken}/>;
  // }
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/login'>
              < Login />
            </Route>
            <Route path='/catalogue' >
              < Catalogue />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </div>
  );
}
export default App;