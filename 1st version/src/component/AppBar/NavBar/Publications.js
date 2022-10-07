import { Button } from '@mui/material'
import React from 'react'
import { StyledLine } from '../../../styles/NavBarHeader.styled'

function Publications() {
  return (
    <div> 
         <Button
           href="/publications" target="_parent"
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
            Publications
            <StyledLine>
                |
            </StyledLine>
        </Button></div>
  )
}

export default Publications