import React from 'react'
import { connect } from 'react-redux'
import './App.css';


function App(props) {
  console.log(props);
  return (
    <div className='App'>
      <h1>im a app component</h1>
      <h1>My name is {props.myname}</h1>
      <button onClick={() => { props.changeName('Vijay') }}>Change Name</button>
    </div>
  );
}

// to access the state value we use this function
const mapStateToProps = (state) => {
  return {
    myname: state.name
  }
}

// to update the state we use this function
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => { dispatch({ type: 'Change_Name', payload: name }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
