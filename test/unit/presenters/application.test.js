import test from 'ava'
import {mount} from 'enzyme'
import React from 'react'
import App from '../../../src/presenters/application'
import Repo from '../../../src/repo'

test('mounts', assert => {
  const el = mount(<App repo={new Repo()} />)

  assert.truthy(el)
})
