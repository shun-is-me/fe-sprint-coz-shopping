import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from 'styled-components';

import Header from './pages/Header';
import Footer from './pages/Footer';
import MainPage from './pages/mainPage';
import BookmarkPage from './pages/BookmarkPage';
import ProductListPage from './pages/ProductlistPage';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    width: 1128px;
    margin: 24px 76px 0;
  }
`;

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Wrapper>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/products/list' element={<ProductListPage />} />
            <Route path='/bookmark' element={<BookmarkPage />} />
          </Routes>
        </Wrapper>
        <Footer/>
      </Router>
    </>
      
  );
}

export default App;
