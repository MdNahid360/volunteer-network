import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import AddEvents from './component/AddEvents/AddEvents';
 

function App() {
  return (
    <div className="App">
             <Router>
      <div className="nav-bar mt-3">
        <ul className="d-flex">
          <li className="nav-item  px-3 ">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item  px-3 ">
            <Link to="/AddEvents">Add Event</Link>
          </li>
       
          <li className="nav-item  px-3 ">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
                <Home />
           </Route>
          <Route path="/AddEvents">
                <AddEvents />
          </Route>
         
          <Route path="/dashboard">

          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
