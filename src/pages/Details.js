import React from 'react'
import { useParams } from 'react-router-dom'

export default function Details(props) {

  const {hotdogs} = props
  const {id} = useParams()

  const selectedHotdog = hotdogs[id];

  return (
    <div>
      <h2>Detail Page</h2>
      <p>{hotdogs[id].name}</p>
    </div>
  )
}