import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import reactDom from 'react-dom';
import { Component } from 'react';

export default function BasicTextFields() {
  const classes = useStyles();}

class Inputs extends Component{
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write an essay about your favorite DOM element.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Text submitted...' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <TextField value={this.state.value} onChange={this.handleChange} id="standard-basic" label="Type Something...." />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
