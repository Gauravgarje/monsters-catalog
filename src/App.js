import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: 'Ravana', id: 1, description: "ten headed king of Lanka" },
        { name: 'Kumbhakarna', id: 2, description: "Ravana's giant brother" },
        { name: 'Indrajit', id: 3, description: "Ravana's son, illusionary warfare master" },
        { name: 'Tataka', id: 4, description: "Demoness slained by Ram" },
        { name: 'Maricha', id: 5, description: "turned into golden deer to decieve Ram" },
        { name: 'Vibhishana', id: 6, description: "Ravana's brother who sided with Ram" },
        { name: 'Hiranyakashipu', id: 7, description: "Demon king slained by Narsimha" },
        { name: 'Hiranyaksha', id: 8, description: "Hiranyakashipu's brother slained by Varaha" },
        { name: 'Mahishasura', id: 9, description: "Buffalo demon slained by Durga" },
        { name: 'Andhaka', id: 10, description: "blind demon borned from Shiva's sweat" },
        { name: 'Bakasura', id: 11, description: "man eating demon" },
        { name: 'Aghasura', id: 12, description: "snake demon" },
        { name: 'Narkasura', id: 13, description: "Demon king slained by Krishna" },
        { name: 'Bhasmasura', id: 14, description: "Demon king who tried to burn Shiva" },
        { name: 'Vasuki', id: 15, description: "serpent used as a rope during Samudra Manthan" },
        { name: 'Kaliya', id: 16, description: "Poisonous serpent defeated by Krishna" },
        { name: 'Bali', id: 17, description: "Asura king defeated by Vamana avtar of Vishnu" },
        { name: 'Jambavan', id: 18, description: "Wise bear-warrior, ally of Ram" },
        { name: 'Raktabija', id: 19, description: "Demon replicated from his own blood" },
        { name: 'Surapadman', id: 20, description: "Demon defeated by Murugan" },
      ],
      searchString: ""
    };
  }

  // componentDidMount() { // fetch data from REST API of users (fake data)
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((users) => this.setState(
  //       () => {
  //         return { monsters: users };
  //       },
  //       () => {
  //         console.log(this.state);
  //       }
  //     ));
  // }

  onSearchChange = (event) => {
    console.log(event.target.value);

    const searchString = event.target.value.toLocaleLowerCase();

    this.setState(() => { return { searchString }; }, () => { console.log(this.state); });
  }

  render() {

    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="Search monsters" onChange={onSearchChange} />
        {
          filteredMonsters.map((monster) => { return <div key={monster.id}><h1>{monster.name}</h1></div>; })
        }
      </div>
    );
  }
}

export default App;
