import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);


////map 

// import React from 'react';
// import ReactDOM from 'react-dom';

// const people = ['Rowe', 'Prevost', 'Gare'];

// const peopleLis = people.map(person =>
//   // expression goes here:
//   <li>{person}</li>
// );

// // ReactDOM.render goes here:
// ReactDOM.render(<ul>{peopleLis}</ul>,document.getElementById('app'))

//keys using map method

// import React from 'react';
// import ReactDOM from 'react-dom';

// const people = ['Rowe', 'Prevost', 'Gare'];

// const peopleLis = people.map((person,i) =>
//   // expression goes here:
//   <li key={'person_' + i}>{person}</li>
// );

// // ReactDOM.render goes here:
// ReactDOM.render(<ol>{peopleLis}</ol>,document.getElementById('app'))


// // jsx
// const greatestDivEver = <div>i am div</div>;
// //without jsx
// const greatestDivEver = React.createElement(
//     "div",
//     null,
//     "i am div"
//   );