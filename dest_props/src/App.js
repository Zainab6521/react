// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
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
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react'

import './App.css'

import Main from './Components/Main'


// import Greet from './Components/Greet'
// import Welcome from './Components/Welcome'
// import Hello from './Components/Hello'
// import Message from './Components/Message'
// import Counter from './Components/Counter'

// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <Greet name= "zainab" heroName="manizeh."/>
//         <div><h2>Boss! Bohat Mushkil horahi hai yahan., in starting only</h2>
//         </div>
// <Welcome/>
//       </div>
//     )
//   }
// }
// export default App;


class App extends Component {
  render() {
    return (
      <div className="App">
    <Main/>
      </div>
        
    )
  }
}
export default App;
