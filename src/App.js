import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

class App extends Component {
  render(){
    return (
      <div>
        <p>test</p>
      {/* creats an instance of a class Header and displays it */}
        <Header />
        <Header />
        <Header />

      </div>
    )
  }
}

export default App;
