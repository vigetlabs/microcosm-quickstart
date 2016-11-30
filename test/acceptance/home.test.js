import visit from '../helpers/visit'

describe('home', function () {

  // This is a sample test. Visit a page and assert the result of interactions.
  // http://nightmarejs.org
  it ('works', async function () {
    await visit('/').end()
  })

})
