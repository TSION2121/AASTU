import * as  React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
// import image from '../image/homepage7.jpg'
import { StyledImage } from '../../styles/NavBarHeader.styled';

export default function Cards() {
  return (
    <Card
     variant="contained"
      sx={{ 
        minWidth: '550px',
        backgroundColor: 'white', 
        position: 'relative', 
        wordSpacing: '0.5rem', 
        display: 'flex',
        objectFit:'cover',
        backgroundSize:'cover', 
        }}
        >
      
      <AspectRatio
      objectFit="contain"
      //  ratio="16/8" 
       >
        <StyledImage />
        {/* <img
        style={{ backgroundImage: `url(${image})`,
        
        }}
        
          // src="https://images.unsplash.com/photo-1527549993586-dff825b37782?crop=entropy&auto=format&fit=crop&w=3270"
          alt=""
        /> */}
      </AspectRatio>
      <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', gap: 0.5 }}>
        
        <Typography 
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'right'}}
        level="body2">April 24 to May 02, 2021</Typography>
        <Typography 
        level="h1" fontSize="xl"  sx={{ alignSelf: 'flex-start', 
        // minHeight:"300px",
        fontSize:"25px",
        fontWeight:"1000", }}>
Enhancing Diaspora connection for Science and Technology Development        </Typography>
      </Box>
      {/* <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton> */}

      <Box
      sx={{
         display: 'flex'  
         }}
         >
        <div>
          <Typography level="body3"  sx={{ alignSelf: 'flex-start', 
        // minHeight:"300px",
        fontSize:"14px",
        fontFamily: 'Inter',
        fontWeight:"400", }}>
          Following the invitation of the Prime Minister, Dr. Abiy Ahmed, members of the Diaspora who have returned home are making various efforts to ensure the security of their country and contribute to the development and growth of our country. In connection with this, members...
</Typography>
         
        </div>
       
      </Box>
      <Button
          variant="outlined"
          size="sm"
        
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600, color:"white",
        backgroundColor: '#A38900', display:'flex',
      flexDirection: 'row',}}
        >
          READ MORE <IconButton >
<ArrowForwardTwoToneIcon />
          </IconButton>
        </Button>
    </Card>
  );
}
