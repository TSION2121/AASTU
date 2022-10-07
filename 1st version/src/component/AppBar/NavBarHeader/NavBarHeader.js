import React from 'react'
import { StyledNavBarHeader } from '../../../styles/NavBarHeader.styled'
import AASTUmail from './AASTUmail'
import Elearning from './Elearning'
import Library from './Library'
import Login from './Login'

function NavBarHeader() {
  return (
    <StyledNavBarHeader>
        <>
        <AASTUmail/>
        <Elearning />
        <Library />
        <Login />
</>
    </StyledNavBarHeader>
  )
}

export default NavBarHeader