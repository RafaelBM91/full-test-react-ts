import * as React from 'react';
import styled from 'styled-components';

import { Button } from './components/button';

const logo = require('../logo.svg');

interface AppProps { 
  className?: string;
}

interface AppState {
  texto: string;
  items: Array<string>;
}

class App extends React.Component<AppProps, AppState> {
  
  constructor (props: AppProps) {
    super(props);
    
    this.state = {
      texto: '',
      items: []
    };

    this.changeState = this.changeState.bind(this);
    this.onclick = this.onclick.bind(this);
  }

  public changeState (event: any) {
    let { value } = event.target;
    this.setState({
      texto: value
    });
  }

  public onclick (event: any) {
    let { texto, items } = this.state;
    if (texto.length > 0) {
      items.push(texto);
      texto = '';
      this.setState({
        texto,
        items
      });
    }
  }

  public render() {
    let { texto, items } = this.state;
    return (
      <div className={this.props.className}>
        <header>
          <img src={logo} alt="logo" />
          <h1>Welcome to React</h1>
        </header>
        <p>
          <a href="#">{this.state.texto}</a>
          <br/>
          <input type="text" onChange={this.changeState} value={texto} placeholder="Texto..." />
          <Button primary={true} onClick={this.onclick}>Hola</Button>
        </p>
        <ul>
          {items.map( (val, id) => (<ol key={id}>{val}</ol>) )}
        </ul>
      </div>
    );
  }
}

const AppComponent = styled(App)`
  text-align: center;
  header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }
  header > img {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  }
  header > h1 {
    font-size: 1.5em;
  }
  p {
    font-size: large;
  }
  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export default AppComponent;
