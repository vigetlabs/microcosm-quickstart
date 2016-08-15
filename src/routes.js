import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './presenters/application'
import Planets from './presenters/planets'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Planets} />
  </Route>
)
