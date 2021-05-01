import { Class } from '@material-ui/icons';
import React from 'react';
import ReactDOM from 'react-dom';

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }
// class Garage extends React.Component {
//     render() {
//       return (
//         <div>
//         <h1>Who lives in my Garage?</h1>
//         <Car />
//         </div>
//       );
//     }
//   }
  
  class Car1 extends React.Component {
    render() {
      return <h2>I am a {this.props.brand}!</h2>;
    }
  }
  
  class Garage2 extends React.Component {
    render() {
      const carname = "lamborghini";
      return (
        <div>
        <h1>Who lives in garage2?</h1>
        <Car1 brand={carname} />
        </div>
      );
    }
  }
  class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "lamborghini",
        model: "Huracan",
        color: "Red",
        year: 2020
      };
    }
    changeColor = () => {
        this.setState({color: "blue"});
      }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}  
            {this.state.model}<br/>
            from {this.state.year}.
          </p>
          <button
          type="button"
          onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }
  ReactDOM.render(<Car />, document.getElementById('root'));
  
//   ReactDOM.render(<Garage2 />, document.getElementById('root'));

export default Car;