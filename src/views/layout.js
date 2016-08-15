import React from 'react'

export default function Layout ({children}) {

  return (
    <div>
      <h1>You've successfully installed microcosm-starter</h1>
      <p>Great things await!</p>
      {children}
    </div>
  )
}
