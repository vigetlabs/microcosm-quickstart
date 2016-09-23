import Microcosm from 'microcosm'
import Planets from './domains/planets'

class Repo extends Microcosm {

  setup() {
    this.addDomain('planets', Planets)
  }

  wait () {
    return new Promise((resolve, reject) => {
      this.on('change', function () {
        if (this.history.size() === 0) {
          resolve()
        }
      }, this)
    })
  }

}

export default Repo
