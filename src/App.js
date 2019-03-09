import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state={
    cadance:''
  }

  onSetCadance = (event) => {
    //let newState = {...this.state}
    this.setState({cadance: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>-- Luma Dashboard --</h1>
        <div>When would you like to send reminders?</div>
        <select onChange = {this.onSetCadance}>
          <option>Day 1</option>
          <option >Day 2</option>
          <option>Day 3</option>
        </select>
        <h2>{this.state.cadance}</h2>
      </div>
    );
  }
}

export default App;
