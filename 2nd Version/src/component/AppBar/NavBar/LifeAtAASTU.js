import { Button,  Menu,  MenuList } from '@mui/material'
import React from 'react'
import { StyledLine, StyledLink, StyledList } from '../../../styles/NavBarHeader.styled'
import { StyledSidebar } from './Sidebar.styled';
import SidebarItem from './SidebarItem';
import Fade from '@mui/material/Fade';
import lifeAtAASTU from '../../JSON/lifeAtAASTU.json'

function LifeAtAASTU() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>  
        <Button
         aria-controls={open ? 'fade-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         onClick={handleClick}
         onMouseEnter={handleClick}
          href="/lifeAtAASTU" 
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
            LifeAtAASTU
            <StyledLine>
                |
            </StyledLine>
        </Button>
        <Menu
      sx={{backgroundColor: 'transparent'}}
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onMouseLeave={handleClose}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
     
           
        
       
            <MenuList 
            sx={{
              backgroundColor:'beige'
            }}
            onClick={handleClose} >
             <StyledSidebar >
            { lifeAtAASTU.map((item, index) => {
            return <SidebarItem key={index} item={item} />
   }) }</StyledSidebar>
        
   <StyledList>
       {lifeAtAASTU.map((sub,i) => <StyledLink href={sub.path} key={i}>
           {sub.title}
           </StyledLink>)}
   </StyledList>
   
            </MenuList>
            
          
             
         
   
      </Menu>
        </div>
  )
}

export default LifeAtAASTU