/**
 * Visit a page
 */

import boot from '../../src/boot'
import {createMemoryHistory} from 'react-router'

export default async function visit (path) {
  const home = createMemoryHistory({ path })
  const el   = document.createElement('div')
  const repo = boot(el, home).repo

  // Wait for all history actions to finish
  await repo.wait()

  return { el, repo }
}
