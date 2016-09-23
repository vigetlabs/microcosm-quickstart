import {getPlanets} from '../actions/planets'

const Planets = {
  getInitialState() {
    // Remember, we put the planets data into the action
    return []
  },

  append(planets, data) {
    return planets.concat(data)
  },

  register() {
    return {
      [getPlanets]: this.append
    }
  }
}

export default Planets
