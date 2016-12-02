import React from 'react'

export default function PlanetList ({ planets = [] }) {

  return (
    <ul>
      { planets.map(p => <li key={p}>{p}</li>)}
    </ul>
  )
}
