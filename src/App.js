import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        // { name: 'Ravana', id: 1 },
        // { name: 'Kumbhakarna', id: 2 },
        // { name: 'Indrajit', id: 3 },
        // { name: 'Tataka', id: 4 },
        // { name: 'Maricha', id: 5 },
        // { name: 'Vibhishana', id: 6 },
        // { name: 'Hiranyakashipu', id: 7 },
        // { name: 'Hiranyaksha', id: 8 },
        // { name: 'Mahishasura', id: 9 },
        // { name: 'Andhaka', id: 10 },
        // { name: 'Bakasura' },
        // { name: 'Aghasura' },
        // { name: 'Narkasura' },
        // { name: 'Bhasmasura' },
        // { name: 'Vasuki' },
        // { name: 'Kaliya' },
        // { name: 'Bali' },
        // { name: 'Jambavan' },
        // { name: 'Raktabija' },
        // { name: 'Surapadman' },
      ]
    };
  }

  componentDidMount() { // fetch data from REST API of users (fake data)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users };
        },
        () => {
          console.log(this.state);
        }
      ));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => { return <div key={monster.id}><h1>{monster.name}</h1></div>; })
        }
      </div>
    );
  }
}

export default App;
