import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Gaurav', lastName: 'Garje' },
      company: 'Morgan Stanley',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, You work at {this.state.company}...
          </p>
          <button onClick={() => {
            this.setState(() => { // updater function
              return { name: { firstName: 'Vaibhav', lastName: 'Garje' }, company: 'Data Axle' };
            }, () => { // callback function
              console.log(this.state);
            });
          }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
