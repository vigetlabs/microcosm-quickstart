import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import Layout from '../views/layout'

class Application extends Presenter {

  render() {
    return <Layout children={ this.props.children } />
  }

}

export default Application
