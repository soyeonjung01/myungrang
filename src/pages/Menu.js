import React from 'react';
import './styled.css';
import {useState,  useParams} from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';

// bootstrap
import {Container, Row, Col} from 'react-bootstrap';

// data
import hotdogdata from './hotdog'
import Details from './Details';

// styled
import styled from 'styled-components';

const Tap = styled.ul `
  display: flex;
  gap : 100px;
  justify-content: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  a {
   font-size : 22px;
   font-weight: 500
  }
`
const Product = styled.div`
  width: 100%;
  background-color: #eee;
  border-radius: 20px;
  text-align: center
`
const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top : 10px;
  text-align: center

`
export default function Menu() {
  const navigate = useNavigate()
  const [hotdogs] = useState(hotdogdata)
  
  return (
    <div className='container'>
      <p className='title'>메뉴</p>
      <Tap>
        <li><Link onClick={() => {navigate('/')}}>핫도그</Link></li>
        <li><Link onClick={() => {navigate('set')}}>세트메뉴</Link></li>
        <li><Link to=''>사이드</Link></li>
      </Tap>
      
      <Routes>
        <Route path='/' element={
          <Container>
            <Row>
              {
              hotdogs.map((hotdog, index) => {
                return (
                <Col style={{ marginTop: 20 }}>
                  <Link to={`/details/${index}`}>
                    <Product>
                      <img src={hotdog.img} alt="hotdog_img" style={{ width: 500 }} />
                      <Name>{hotdog.name}</Name>
                      <p>{hotdog.tag}</p>
                    </Product>
                  </Link>
                </Col>  
                )
              })}
            </Row>
          </Container>
        } />
      <Route path='/details/:id' element={<Details hotdogs={hotdogs} />} />       
    </Routes>
    </div>
  )
}
