import React from 'react'
import DOM from 'react-dom'
import Repo from './repo'
import routes from './routes'
import { Router, browserHistory } from 'react-router'

export default function boot (el, history = browserHistory) {
  const repo = new Repo()

  function injectRepo (Component, props) {
    return <Component {...props} repo={repo} />
  }

  return DOM.render((
    <Router history={history} routes={routes} createElement={injectRepo} />
  ), el)
}
