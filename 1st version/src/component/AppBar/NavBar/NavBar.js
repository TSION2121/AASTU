import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StyledButtons, StyledNavBar } from '../../../styles/NavBarHeader.styled'
import Cards from '../../card/Cards'
import Academics from './Academics'
import Adminstration from './Adminstration'
import LifeAtAASTU from './LifeAtAASTU'
import NewsEvents from './NewsEvents'
import Publications from './Publications'
import Research from './Research'
import Home from './Home'
import { Flex } from '../../../styles/Flex.styled'

function NavBar() {
  return (
    <>
    <Flex >
    <StyledNavBar  >
    <StyledButtons>
        <Home />
        <Academics />
        <Research />
        <Adminstration />
        <LifeAtAASTU />
        <NewsEvents />
        <Publications />
    </StyledButtons>
    </StyledNavBar>
</Flex>
    {/* <Routes>
      <Route to="/news" element={<Cards />} >

      </Route>
    </Routes> */}
    
    
    </>
  )
}

export default NavBar