import React from 'react'
import AppBar from './AppBar/AppBar'
import News from './Home/News'
// import useMediaQuery from '@mui/material/useMediaQuery';
// import json2mq from 'json2mq';
import { StyledHomePageImage } from '../styles/NavBarHeader.styled';
import { AspectRatio } from '@mui/joy';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Home/NotFound';




function Home() {
  // const matches = useMediaQuery('(min-width:200px)');
  // const matches = useMediaQuery(
  //   json2mq({
  //     minWidth: 200,
  //   }),);
  return (
    <div>
         {/* <span>{`(min-width:200px) matches: ${matches}`}     </span> */}
        <AppBar />
        <Routes>
      <Route path="/news"   element={<News />} >
      {/* <Route path="/adminstration"  element={<News />} >
      <Route path="/publication"  element={<News />} >
      <Route path="/research"  element={<News />} >
      <Route path="/lifeAtAASTU"  element={<News />} >
      <Route path="/academics"  element={<News />} > */}
      <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
        <AspectRatio ratio="4/3">
        <StyledHomePageImage />
        </AspectRatio>
       <News />
  
    </div>
  )
}

export default Home