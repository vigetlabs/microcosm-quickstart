import Microcosm from 'microcosm'
import Planets from './domains/planets'

class Repo extends Microcosm {

  setup() {
    this.addDomain('planets', Planets)
  }

  wait () {
    return new Promise((resolve, reject) => {
      this.once('change', function sleep () {
        if (this.history.size() === 0) {
          resolve()
        } else {
          this.once('change', sleep)
        }
      })
    })
  }

}

export default Repo
