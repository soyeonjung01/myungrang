import React from 'react'
import { useParams } from 'react-router-dom';

export default function Details(props) {

  const {hotdogs} = props
  const {id} = useParams()

  return (
    <div>
      <h1>hi</h1>
      <h1>{hotdogs[id].name}</h1>
      <img src={hotdogs[id].detailimg} alt="detail_img" />
    </div>
  )
}
