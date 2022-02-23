import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Explore from './Pages/Home/Explore/Explore';
import Service from './Pages/Home/Service/Service/Service';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/Authprovider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Admin/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
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
  <PrivateRoute path="/allproducts">
    <Service/>
  </PrivateRoute>
  <PrivateRoute path="/dashboard">
    <Dashboard/>
  </PrivateRoute>
  <Route path="*">
    <Notfound></Notfound>
  </Route>

</Switch>
</BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
