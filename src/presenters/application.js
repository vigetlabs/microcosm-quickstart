import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import Layout from '../views/layout'

class Application extends Presenter {

  view ({ children }) {
    return <Layout children={ children } />
  }

}

export default Application
