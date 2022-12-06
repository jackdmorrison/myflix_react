import {BrowserRouter as Router, Routes, Route, Link} from'react-router-dom';
import Catalogue from './Catalogue'
import Login from './login'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Login />}></Route>
          <Route exact path='/catalogue' element={< Catalogue />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;