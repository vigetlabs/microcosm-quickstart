import test from 'ava'
import boot from '../../src/boot'
import visit from '../helpers/visit'

test.cb('shows a list of planets on the homepage', assert => {
  const homepage = visit('/')

  setTimeout(function () {
    const planets = homepage.querySelectorAll('li')

    assert.is(planets[0].textContent, 'Mercury')
    assert.is(planets[8].textContent, 'Pluto')

    assert.end()
  }, 250)
})
