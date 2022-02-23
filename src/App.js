import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Explore from './Pages/Home/Explore/Explore';
import Service from './Pages/Home/Service/Service/Service';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
       
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/allproducts">
            <Service/>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
