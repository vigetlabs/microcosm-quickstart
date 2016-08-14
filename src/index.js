import './style/application.css'

import React from 'react'
import DOM from 'react-dom'
import Provider from 'microcosm/addons/provider'
import { Router, browserHistory } from 'react-router'
import Repo from './repo'
import routes from './routes'

const app  = new Repo()
const root = document.getElementById('root')

DOM.render((
  <Provider app={app}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), root)
