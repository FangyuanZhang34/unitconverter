import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputNum from './InputNum/InputNum.js';

class App extends Component {
  state={
    cm: 0,
    inch: 0,
    kg: 0,
    pound: 0,
  };

  
      // inch: event.target.value,
      // inch: event.target.type === 'number'? parseFloat(event.target.value) * 0.393701 : null,
  

  convertCm2Inch = (event) => {
    this.setState({
      cm:event.target.value != 0 ? event.target.value : '0',
      inch: event.target.value != 0 ? parseFloat(event.target.value) * 0.393701 : '0',
    })
  };

  convertInch2Cm = (event) => {
    this.setState({
      cm:event.target.value != 0 ? parseFloat(event.target.value) * 2.54 : '0',
      inch: event.target.value != 0 ? event.target.value : '0', 
    })
  };

  convertKg2Pound = (event) => {
    this.setState({
      kg:event.target.value != 0 ? event.target.value : '0',
      pound: event.target.value != 0 ? parseFloat(event.target.value) * 2.20462 : '0',
    })
  };

  convertPound2Kg = (event) => {
    this.setState({
      kg:event.target.value != 0 ? parseFloat(event.target.value) * 0.453592 : '0',
      pound: event.target.value != 0 ? event.target.value : '0', 
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Hi , I'm a Unit Converter~ (ฅ´ω`ฅ) </h1>
        <hr></hr>
        <div className="Body">
          <InputNum 
          cm={this.state.cm} 
          inch={this.state.inch}
          kg={this.state.kg} 
          pound={this.state.pound}
          convert2Inch={this.convertCm2Inch}
          convert2Cm={this.convertInch2Cm}
          convert2Pound={this.convertKg2Pound}
          convert2Kg={this.convertPound2Kg}>
          </InputNum>

        </div>
            
      </div>
    );
  };
}

export default App;
