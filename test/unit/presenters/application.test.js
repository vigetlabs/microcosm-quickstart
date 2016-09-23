import React from 'react'
import {mount} from 'enzyme'
import App from '../../../src/presenters/application'
import Repo from '../../../src/repo'

it('mounts', function () {
  const el = mount(<App repo={new Repo()} />)

  expect(el).toBeTruthy()
})
