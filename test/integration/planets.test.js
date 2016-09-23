import boot from '../../src/boot'
import visit from '../helpers/visit'

test('shows a list of planets on the homepage', async function () {
  const { el, repo } = await visit('/')

  const planets = el.querySelectorAll('li')

  expect(planets[0].textContent).toEqual('Mercury')
  expect(planets[8].textContent).toEqual('Pluto')
})
