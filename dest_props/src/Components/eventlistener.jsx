import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img onClick={makeDoggy}
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

ReactDOM.render(kitty, document.getElementById('root'));


////multiline render jsx
// import React from 'react';
// import ReactDOM from 'react-dom';

// class QuoteMaker extends React.Component{
//   render(){
//     return(
//       <blockquote>
//   <p>
//     What is important now is to recover our senses.
//   </p>
//   <cite>
//     <a target="_blank" 
//       href="https://en.wikipedia.org/wiki/Susan_Sontag">
//       Susan Sontag
//     </a>
//   </cite>
// </blockquote>
//     )
//   }
// }
// ReactDOM.render(
//   <QuoteMaker />,
//   document.getElementById('app')
// );

//component variable attribute

// import React from 'react';
// import ReactDOM from 'react-dom';

// const owl = {
//   title: 'Excellent Owl',
//   src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
// };

// // Component class starts here:
// class Owl extends React.Component{
//   render(){
//     return(
//       <div>
//       <h1>{owl.title}</h1>
//       <img 
//       src={owl.src}
//       alt={owl.title}
//       />
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Owl/>,document.getElementById('app'))


// import React from 'react';
// import ReactDOM from 'react-dom';

// const friends = [
//   {
//     title: "Yummmmmmm",
//     src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
//   },
//   {
//     title: "Hey Guys!  Wait Up!",
//     src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
//   },
//   {
//     title: "Yikes",
//     src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
//   }
// ];

// New component class starts here:
// //render function calculations
// class Friend extends React.Component{
//   render() {
//     const friend=friends[2];
//   return (
//     <div>
//     <h1>{friend.title}</h1>
//     <img 
//     src={friend.src}
//     />
//     </div>
//   );
// }
// }
// ReactDOM.render(<Friend />,document.getElementById('app'))


/// render function if statement
// import React from 'react';
// import ReactDOM from 'react-dom';

// const fiftyFifty = Math.random() < 0.5;

// // New component class starts here:
// class TonightsPlan extends React.Component {
//   render() {
//     if (fiftyFifty) {
//       return <h1>Tonight I'm going out WOOO</h1>;
//     } else {
//       return <h1>Tonight I'm going to bed WOOO</h1>;
//     }
//   }
// }

// ReactDOM.render(
// 	<TonightsPlan />,
// 	document.getElementById('app')
// );