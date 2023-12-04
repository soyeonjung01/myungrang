import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import React, { useRef, useState } from 'react';

//pages
import Home from './pages/Home';
import Concept from './pages/Concept';
import Menu from './pages/Menu';
import Event from './pages/Event';
import Franchisees from './pages/Franchisees';

//styled
import styled from 'styled-components';


function App() {
  return (
    <>
      <header className='header'>
        <div className='gnb_box'>
          <nav className='gnb'>
            <ul>
              <li><a href="#!">SITEMAP</a></li>
              <li><a href="#!">점주공간</a></li>
              <li><a href="#!">해외문의</a></li>
            </ul>
          </nav>
        </div>
        <div className='lnb_box'>
          <div className='logo'>
            <Link to='/'>
            <img src={process.env.PUBLIC_URL + '/images/logo/logo.png'} alt="logo_img"/>
            </Link>
          </div>
          <nav className='lnb'>
            <ul>
              <li><Link to='concept'>명랑시대</Link></li>
              <li><Link to='menu'>메뉴</Link></li>
              <li><Link to='event'>이벤트</Link></li>
              <li><Link to='franchisees'>가맹안내</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='concept' element={<Concept />}/>
        <Route path='menu' element={<Menu />}/>
        <Route path='event' element={<Event />}/>
        <Route path='franchisees' element={<Franchisees />}/>
      </Routes>
    </>
  );
}


export default App;
