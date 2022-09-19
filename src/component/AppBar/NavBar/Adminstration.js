import { Button } from '@mui/material'
import React from 'react'
import { StyledLine } from '../../../styles/NavBarHeader.styled'

function Adminstration() {
  return (
    <div>  
        <Button 
          href="/adminstration" target="_parent"
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
        }}>
            Adminstration
            <StyledLine>
                |
            </StyledLine>
        </Button></div>
  )
}

export default Adminstration