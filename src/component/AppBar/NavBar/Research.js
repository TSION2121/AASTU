import { Button } from '@mui/material'
import React from 'react'
import { StyledLine } from '../../../styles/NavBarHeader.styled'

function Research() {
  return (
    <div>
          <Button
            href="/research" target="_parent"
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
        }}>Research
        <StyledLine>
                |
            </StyledLine>
        </Button>
    </div>
  )
}

export default Research