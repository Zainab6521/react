import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
  get name(){
    return 'whatever-your-name-is-goes-here';
  }
  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));

// onclickk event andd this

// import React from 'react';
// import ReactDOM from 'react-dom';

// class Button extends React.Component {
//   scream() {
//     alert('AAAAAAAAHHH!!!!!');
//   }

//   render() {
//     return <button onClick={this.scream}>AAAAAH!</button>;
//   }
// }
// ReactDOM.render(<Button />,document.getElementById('app'))


//component render action 
// //portfolio wali file:
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {NavBar} from './NavBar.js'

// class ProfilePage extends React.Component {
//   render() {
//     return (
//       <div>
//        <NavBar />
//         <h1>All About Me!</h1>
//         <p>I like movies and blah blah blah blah blah</p>
//         <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
//       </div>
//     );
//   }
// }
// ReactDOM.render(<ProfilePage/>,document.getElementById('app'))


//navbar wali file

// import React from 'react';

// export class NavBar extends React.Component {
//   render() {
//     const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
//     const navLinks = pages.map(page => {
//       return (
//         <a href={'/' + page}>
//           {page}
//         </a>
//       )
//     });

//     return <nav>{navLinks}</nav>;
//   }
// }