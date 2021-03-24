import React from 'react'
import { connect } from 'react-redux'
import './App.css';
import { anothername, addWish } from './actionCreater/myactions'


function App(props) {
  console.log(props);
  const wishes = props.mywishes.map(item => {
    return <h2 key={item}>{item}</h2>
  })
  return (
    <div className='App'>
      <h1>im a app component</h1>
      <h1>My name is {props.myname}</h1>
      {wishes ? wishes : ''}
      <button onClick={() => { props.changeName() }}>Change Name</button>
      <button onClick={() => props.addWish()}>add wish</button>
    </div>
  );
}

// to access the state value we use this function
const mapStateToProps = (state) => {
  return {
    myname: state.name,
    mywishes: state.wish
  }
}

// to update the state we use this function
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => { dispatch(anothername()) },
    addWish: () => { dispatch(addWish()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
