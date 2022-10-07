import { Button } from '@mui/material'
import React from 'react'
import { StyledLine } from '../../../styles/NavBarHeader.styled'

function Academics() {
  return (
    <div>
        
        <Button
        href="/academics" target="_parent"
         variant="text"  
         sx={{
        color:"black",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "13px",
        lineHeight: "16px",
        "&:hover":{
            color:'white',
            backgroundColor:'black',
        }
        
        }} >Academics
        
        <StyledLine>
                |
            </StyledLine>
        </Button>
    </div>
  )
}

export default Academics