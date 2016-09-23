import boot from '../../src/boot'
import visit from '../helpers/visit'

test('shows a list of planets on the homepage', function () {
  const homepage = visit('/')
  const planets = homepage.querySelectorAll('li')

  expect(planets[0].textContent).toEqual('Mercury')
  expect(planets[8].textContent).toEqual('Pluto')
})
