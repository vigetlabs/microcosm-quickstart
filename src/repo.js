import Microcosm from 'microcosm'
import Planets from './domains/planets'

class Repo extends Microcosm {

  setup() {
    this.addDomain('planets', Planets)
  }

}

export default Repo
