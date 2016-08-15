import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import PlanetList from '../views/planet-list'
import {getPlanets} from '../actions/planets'

class Planets extends Presenter {

  presenterWillMount(repo) {
    repo.push(getPlanets)
  }

  viewModel() {
    return {
      planets: state => state.planets
    }
  }

  render() {
    return <PlanetList planets={this.state.planets} />
  }

}

export default Planets
