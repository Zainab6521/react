import React, { useState } from 'react';
import {Button} from '@material-ui/core';
import {styled} from '@material-ui/core/styles';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

export function Hello(props){
  const [name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Name Submitted: ${name} \n Age submitted: ${Age} \n Msg: ${message}`)
      // document.write(`Name submitted ${name}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br/>
        Age:
        <input
          type="number"
          value={Age}
          onChange={e => setAge(e.target.value)}
        />
        <br/>
        Leave a Message:
        <input type="textArea"
        value={message}
        onChange={e => setMessage(e.target.value)}
        />
      </label>
      <br/>
      {/* <input type="submit" value="Submit" /> */}
      {/* <Button type="submit" variant="contained" color="primary">Submit</Button> */}
      <MyButton type="submit">Submit</MyButton>
    </form>
  );
}
  // unreachable code.........
  // return (
  //   <>
  //   <label>
  //     Name:
  //     <input type="text" />
  //   </label>
  //   <input type="submit" value="Submit"/>
  //   </>
  // );


//basic syntax for arrow function
// const Hello = () => (
//   <div>
//     <h1>Hello Tokyo!</h1>
//     <div id="hii"><input type="textfield" placeholder=" type something..."></input>
//     </div>
//   </div>
// );

export default Hello