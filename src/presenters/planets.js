import Presenter from 'microcosm/addons/presenter'
import PlanetList from '../views/planet-list'
import {getPlanets} from '../actions/planets'

class Planets extends Presenter {
  view = PlanetList

  setup (repo) {
    repo.push(getPlanets)
  }

  model () {
    return {
      planets: state => state.planets
    }
  }
}

export default Planets
