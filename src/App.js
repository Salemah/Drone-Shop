import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Explore from './Pages/Home/Explore/Explore';
import Service from './Pages/Home/Service/Service/Service';


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
          <Route path="/drone">
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
