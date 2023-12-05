import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import {Tab, Tabs} from 'react-bootstrap/';

//pages
import Product from './Product';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

// styled
import styled from 'styled-components';

const Container = styled.section`
  width: 1280px;
  margin: 0 auto;
  overflow: hidden
`
const Title = styled.p`
  color: ${(props) => (props.textColor ? '#ec3029' : '#fff')};
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-top: 120px;
  margin-bottom: 40px
`
const Text = styled.p`
  font-size: 18px;
  text-align: center;
  color: #444
`
const FirstText = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px
`
const Concept = styled.div`
  width: 400px;
  margin-top: 60px;
  margin-right: ${(props) => (props.Right ? '0' : '40px')};
  float: left;
  p {
    font-size: 18px;
    font-weight: 500;
    margin-top: 14px;
    text-align: center;
    color: #444
  }
`
// const Tap = styled.li`
//   font-size: 20px;
//   a {color: #fff}
// `


export default function Home() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/images/visual_banner/visual_banner01.png'}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/images/visual_banner/visual_banner02.png'}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/images/visual_banner/visual_banner03.png'}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/images/visual_banner/visual_banner04.png'}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/images/visual_banner/visual_banner05.png'}/>
        </SwiperSlide>
      </Swiper>
      <Container>
        <Title textColor>OUR STORY</Title>
        <FirstText>청년들의 가슴으로 정직하게 만듭니다.</FirstText>
        <Text>명랑시대 쌀 핫도그는 ‘늘 건강하고, 늘 정직하게, 모두가 행복한’이라는 슬로건을 걸고</Text>
        <Text>청년들의 투명함과 정직함으로 만든 핫도그를 판매하고 있습니다.</Text>
        <Text>명랑시대 쌀핫도그는 쌀을 첨가한 발효숙성 반죽으로 매일 아침 반죽을 만들며 </Text>
        <Text>바삭함과 쫄깃함이 조화롭게 이루어진 건강한 영양간식 입니다.</Text>
        <Concept>
          <img src={process.env.PUBLIC_URL + '/images/concept/concept01.jpg'}/>
          <p># 좋은 재료로 늘 건강하게</p>
        </Concept>
        <Concept>
          <img src={process.env.PUBLIC_URL + '/images/concept/concept02.jpg'}/>
          <p># 매일 신선한 발효숙성 반죽</p>
        </Concept>
        <Concept Right>
          <img src={process.env.PUBLIC_URL + '/images/concept/concept03.jpg'}/>
          <p># 모두를 행복하게 하는 맛</p>
        </Concept>
      </Container>
      <div style={{background: '#ec3029', marginTop: 130}}>
        <Container>
          <Title>OUR PRODUCT</Title>
        </Container>
        <ul style={{
           display: 'flex',
           gap: 50,
           justifyContent: 'center'
        }}>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          Tab content for Home
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Contact">
          Tab content for Contact
        </Tab>
      </Tabs>
        </ul>
        <Routes>
          <Route path=':product' element={<Product />} />
        </Routes>
      </div>
      
    </>
  )
}
