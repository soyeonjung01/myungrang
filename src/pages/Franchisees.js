import React from 'react'

// styled
import styled from 'styled-components';

const Container = styled.section`
  width: 1280px;
  margin: 0 auto;
  overflow: hidden
`
export default function Franchisees() {
  return (
    <Container>
      <img src={process.env.PUBLIC_URL + '/images/franchisees/franchisees_img.jpg'} alt="franchisees_img"/>
    </Container>
  )
}
