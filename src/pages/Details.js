import React from 'react'
<<<<<<< HEAD
import { useParams } from 'react-router-dom'
=======
import { useParams } from 'react-router-dom';
>>>>>>> 569dd787bb52687de7238d6dcae2f6627727f51d

export default function Details(props) {

  const {hotdogs} = props
  const {id} = useParams()

<<<<<<< HEAD
  const selectedHotdog = hotdogs[id];

  return (
    <div>
      <h2>Detail Page</h2>
      <p>{hotdogs[id].name}</p>
    </div>
  )
}
=======
  return (
    <div>
      <h1>hi</h1>
      <h1>{hotdogs[id].name}</h1>
      <img src={hotdogs[id].detailimg} alt="detail_img" />
    </div>
  )
}
>>>>>>> 569dd787bb52687de7238d6dcae2f6627727f51d
