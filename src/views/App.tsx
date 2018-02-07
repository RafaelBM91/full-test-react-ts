import * as React from 'react';
import './App.css';

const logo = require('../logo.svg');

class App extends React.Component<any, any> {
  constructor (props: any) {
    super(props);

    this.state = {
      texto: ''
    };

    this.changeState = this.changeState.bind(this);
  }
  changeState (event: any) {
    let { value } = event.target;
    this.setState({
      texto: value
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <a href="#">{this.state.texto}</a>
          <br/>
          <input type="text" onChange={this.changeState} placeholder="Texto..." />
        </p>
      </div>
    );
  }
}

export default App;
