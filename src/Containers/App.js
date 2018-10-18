import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'
import './App.css';


class App extends Component{
  constructor() {
    super()
    this.state = {
      planets: [],
      searchfield: ''
    }
  }

componentDidMount() {
  fetch('https://swapi.co/api/planets')
  .then(resp =>{return resp.json()})
  .then(data => {this.setState({planets: data.results})
  })
}

onSearchChange = (event) => {
  this.setState({searchfield: event.target.value})
}

  render(){
  const {planets, searchfield} = this.state
  const filteredPlanets = planets.filter(planet =>{
    return planet.name.toLowerCase().includes(searchfield.toLowerCase())
  });
    return !planets.length ?
    <h1 className='tc f1'>Loading</h1> : (
      <div className='tc'>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <Cardlist planets={filteredPlanets}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
