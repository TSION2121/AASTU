import { Button, MenuList } from '@mui/material'
import React from 'react'
import { StyledLine, StyledLink, StyledList } from '../../../styles/NavBarHeader.styled'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import academics from '../../JSON/academics.json'
import SidebarItem from './SidebarItem';
import { StyledSidebar } from './Sidebar.styled';


function Academics() {
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
        href="/academics"                            
         variant="text"  
         sx={{
        color:"black",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "13px",
        lineHeight: "16px",
        display: "none",
        "&:hover":{
            color:'white',
            backgroundColor:'black',
            zIndex: 1,
        }
        
        
        }} >Academics
        
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
              backgroundColor:'beige',
            //   "&:hover":{
            //     color:'white',
            //     backgroundColor:'black',
            //     zIndex: 1,
            // }
            }}
            onClick={handleClose} >
             <StyledSidebar >
            { academics.map((item, index) => {
            return <SidebarItem key={index} item={item} />
   }) }</StyledSidebar>
        
   <StyledList>
       {academics.map((sub,i) => <StyledLink href={sub.path} key={i}>
           {sub.title}
           </StyledLink>)}
   </StyledList>
   
            </MenuList>
            
          
             
         
   
      </Menu>
   
    </div>
  )
}

export default Academics