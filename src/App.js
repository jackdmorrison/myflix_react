import {BrowserRouter as  Route, Switch, BrowserRouter} from 'react-router-dom';
import Catalogue from './Catalogue'
import Login from './login'
function App() {
  const [token, setToken] = useState();
  if(!token){
    return <Login setToken={setToken}/>;
  }
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/login'>
              < Login />
            </Route>
            <Route path='/catalogue' >
              < Catalogue />
            </Route>
          </Switch>
        </BrowserRouter>
        
      </div>
  );
}
export default App;