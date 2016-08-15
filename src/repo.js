import Microcosm from 'microcosm'
import Planets from './stores/planets'

class Repo extends Microcosm {

  setup() {
    this.addStore('planets', Planets)
  }

}

export default Repo
