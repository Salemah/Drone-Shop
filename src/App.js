import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Explore from './Pages/Home/Explore/Explore';
import Allproducts from './Pages/Home/Allproducts/Allproducts';
import Testt from './Pages/Home/tst/Testt';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
        <Route path="/tst">
            <Testt/>
          </Route>
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
            <Allproducts/>
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
