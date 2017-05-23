import './style/application.css'
import React from 'react'
import DOM from 'react-dom'
import Repo from './repo'
import routes from './routes'
import Presenter from 'microcosm/addons/presenter'
import { Router, browserHistory } from 'react-router'

// Do anything on startup here
const repo = new Repo()

// Then mount the application
DOM.render((
  <Presenter repo={repo}>
    <Router history={browserHistory} routes={routes} />
  </Presenter>
), document.getElementById('root'))
