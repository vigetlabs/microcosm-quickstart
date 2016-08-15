/**
 * Visit a page
 */

import boot from '../../src/boot'
import {createMemoryHistory} from 'react-router'

export default function visit (path) {
  const home = createMemoryHistory({ path })
  const div = document.createElement('div')

  boot(div, home)

  return div
}
