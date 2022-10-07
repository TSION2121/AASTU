import { IconButton } from '@mui/joy'
import { Button } from '@mui/material'
import React from 'react'
import { StyledLine } from '../../../styles/NavBarHeader.styled'
import HomeIcon from '@mui/icons-material/Home';

function Adminstration() {
  return (
    <div>  
        <Button 
          href="/" target="_parent"
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
            <IconButton >
                <HomeIcon />
            </IconButton>
            <StyledLine>
                |
            </StyledLine>
        </Button></div>
  )
}

export default Adminstration