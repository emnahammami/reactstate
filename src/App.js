
import './App.css';
import Person from "./components/person"
import React, { Component } from 'react'
import Counter from './components/counter';
export default class App extends Component {
 

  render() {
    return (
      <div><Person /><Counter/></div>
    )
  }
}


