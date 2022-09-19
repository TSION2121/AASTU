import logo from './logo.svg';

import React from 'react'
import NavBarHeader from './NavBarHeader/NavBarHeader';
import NavBar from './NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import News from '../Home/News';
import Home from '../Home';
import Content from '../Contents';
import NotFound from '../Home/NotFound';
import NewsHome from '../Pages/News/NewsHome';

function AppBar() {
  return (
<>
    <NavBarHeader />


    <div>
                <img src={logo} className="App-logo" alt="logo" />


    </div>

    <NavBar />
{/* router */}
<Routes>
      <Route path="/news" element={<NewsHome />} 
      //another NewsCard of NewsFolder
      //separate pages from the readMore  of NewsFolder

      />
      
      <Route path="/" element={<Content />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
    </>
  )
}

export default AppBar