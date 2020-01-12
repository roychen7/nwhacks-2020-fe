import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter,
  Switch,
  Route,
  Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PatientsDrawer from './components/PatientsDrawer';
import PermanentDrawerLeft from './pages/PermanentDrawerLeft';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={PermanentDrawerLeft}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
