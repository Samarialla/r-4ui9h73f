import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repeat: null
    }
  };
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={(e)=>this.setState({repeat :e.target.value})} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.repeat}</p>
      </div>
    );
  }
}

export default App;
