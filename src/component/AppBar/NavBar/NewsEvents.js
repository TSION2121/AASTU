import { Button } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StyledLine } from '../../../styles/NavBarHeader.styled'
import Cards from '../../card/Cards'
import News from '../../Home/News'

function NewsEvents() {
  return (
    <div>
  
          <Button 
          href="/news"
          //  target="_self"
          variant="text"  sx={{
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
          
          News/Events
        
        <StyledLine>
                |
            </StyledLine>
        </Button>
        {/* <Routes>
      <Route path="/news" element={<News />} >

      </Route>
    </Routes> */}
    </div>
  )
}

export default NewsEvents