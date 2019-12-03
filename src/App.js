import React, {Component} from 'react';
import './App.css';
import BritishPound from './BritishPound';

class App extends Component{
  constructor() {
    super();
    this.state= {
      americanDollar: 1
    }

  }

  riseAmericanDollar = () => {
    this.setState({
      americanDollar: this.state.americanDollar + 6.94
    })
  }

  render(){
    return(
      <div className="App">
<header className="App-header">
<p>American Dollar Price.</p>  
      {this.state.americanDollar}
      <br></br>

      <button onClick={this.riseAmericanDollar}> click here</button>

      <br></br>
      <div> <BritishPound dollar={this.state.americanDollar}/> </div>
      <br></br>

      </header>
      </div>
     
    )
}

}

export default App;
