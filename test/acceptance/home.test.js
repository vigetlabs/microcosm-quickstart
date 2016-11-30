import visit from '../helpers/visit'

describe('home', function () {

  test('shows a list of planets on the homepage', async function () {
    let page = visit('/')

    let text = await page.evaluate(() => document.querySelector('ul').textContent)
                         .end()

    expect(text).toContain('Mercury')
    expect(text).toContain('Pluto')
  })

})
