import './App.css';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';

function App() {
  return (
    <main>
      <div>
        <Link to="/">Home </Link>
        <Link to="/About">About Us </Link>
        <Link to="/Shop">Shop Now </Link>
      </div>
      <Switch>
        <Route path="/" exact>
        <Home />
          </Route>
      <Route path="/About" component={About} />
      <Route path="/Shop" component={Shop} />
      {/* <Route path="/" exact >
        <Shop />
        </Route> */}
      <Route Component={Error} />
      {/* <Home />
        <Shop />
        <About /> */}
      </Switch>
    </main >
  )
}
// function Navbar() {
//   return (
//     <div>
//       <Link to="/">Home </Link>
//       <Link to="/About">About Us </Link>
//       <Link to="/Shop">Shop Now </Link>
//     </div>
//   );
// };
// export { Navbar };

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}

//     </div>
//   );
// }

export default App;
