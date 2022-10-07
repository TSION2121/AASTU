import { Button } from '@mui/material'
import React from 'react'

function Library() {
  return (
    <div>
      <Button 
        
        href='/library'
        variant="text"  sx={{
        color:"white",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "13px",
        lineHeight: "16px",
        }}>Library</Button>

    </div>
  )
}

export default Library