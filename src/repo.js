import Microcosm from 'microcosm'
import Planets from './stores/planets'

class Repo extends Microcosm {

  constructor(options) {
    super(options)

    this.addStore('planets', Planets)
  }

}

export default Repo
