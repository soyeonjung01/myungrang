import React from 'react'
import {useState} from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import hotdogdata from './hotdog'


export default function MenuHotdog() {
  const [hotdogs] = useState(hotdogdata)

  return (
    <div className='container'>

      <Container>
        <Row>
          {hotdogs.map((hotdog, index) => {
            return (
            <Col style={{ marginTop: 40 }}>
              <Link to={`details/${index}`}>
                <img src={hotdog.img} alt="hotdog_img" style={{ width: 500 }} />
                <h4>{hotdog.name}</h4>
                <p>{hotdog.tag}</p>
              </Link>
            </Col>  
            )
          })}
        </Row>
      </Container>
      <Routes>
        <Route path='details/:id' element={<Details hotdogs={hotdogs} />} /> 
      </Routes>
    </div>
  )
}
