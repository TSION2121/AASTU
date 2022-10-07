import { Button } from '@mui/material'
import React from 'react'

function Login() {
  return (
    <div>
  <Button 
        href='/login'
        variant="text"  sx={{
        color:"white",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "13px",
        lineHeight: "16px",
        }}>Login</Button>

    </div>
  )
}

export default Login