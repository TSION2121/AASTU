import { AspectRatio, Box, Button, Card, IconButton, Typography } from '@mui/joy';
import { CardContent, CardHeader, CardMedia } from '@mui/material';
import React from 'react'
// import { StyledImage } from '../../styles/NavBarHeader.styled';
import CardDate from './CardDate';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import News from '../Home/News';
import Home from '../Home';
import { StyledReadMoreButtons } from '../../styles/NavBarHeader.styled';
import { StyledCard } from '../../styles/Card.styled';





const NewsHomeCard = (props) => {

    const {id,title,content,date, image} = props;

   const [clicked,setClicked] = React.useState(false)
  // const clicked = props.clicked;

  // if (clicked) {
  //  return <News />
  //  //to be replaced by the other details
  // }

  let readMore;

  if (clicked) {
    readMore = <News />;
  } else {
    readMore = "Read More";
  }
 

   const handleClick = () => {
setClicked(()=> !clicked);
   }



  return (
    <>
    <Box
    sx={{  maxWidth: '768px',
    backgroundColor: 'white', 
    position: 'relative', 
    wordSpacing: '0.5rem', 
    display: 'flex',
    // objectFit:'cover',
    // backgroundSize:'cover', 
    // flexDirection: 'column',

    gap:{xs:'10px', sm: '50px', md: '80px'}, 

    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: {xs : 'column', sm:'column' , md: 'column', lg : 'column', xl : 'column'},   
     
    fontSize:{xs:'30px', sm: '20px', md: '10px', lg :"5px"},
    width :'auto',
    height : 'fit-content',
    boxSizing : {xs:'auto',},
    motionDistance: {xl:'50%',},
    scroll: 'hidden',

  // textAlign: { xs: 'center', sm: 'start' },
  mt: { xs: 1.5, sm: 0, },}}
    >
    {/* <StyledCard  layout={id % 2 === 0 && 'row-reverse'}> */}
    <Card
    id ={id}
    variant="contained"
    sx={{ 
      display: 'flex',
      flex: '1 5 100px',
      border : {xs:'0px', sm: '0px', md: '0px', lg :"2px solid gold", xl: '20px solid gold' },
      backgroundColor: 'lemonchiffon'
      }}
    >

    
    <AspectRatio
    ratio='16/7'
          objectFit="contain"
          sx={{
            
          }}

    >
      <CardMedia
      // sx={{
      //   backgroundSize:'cover',
      //   backgroundRepeat:'no-repeat'
      // }}
    image={        
        image
    }
    ></CardMedia>  
    </AspectRatio>
    <Box
     sx={{ 
        display: 'inline', 
      
      }}
    >

    
    <CardDate
     date ={date}
     
    >

    </CardDate>
    <CardHeader
    title={
      <Typography 
      children={title}
      level="h1"
      fontSize="xl"
    
      sx={{ alignSelf: 'flex-start=', 
      // minHeight:"300px",
      fontSize:{xs:'20px', sm: '40px', md: '60px', lg :"80px"},
      fontWeight:"1000", }} />
    }
    //consitency like Typography
    >
        </CardHeader> 
    </Box>
    <Box
     sx={{
        display: 'flex',
        flexDirection: 'column', 
        }}
    >

    <CardContent 
    children={content}
    level="body3"  
  sx={{ alignSelf: 'space-evenly', 
  // minHeight:"300px",
  fontSize: {xs:'20px', sm: '30px', md: '40px', lg :"40px", xl: '50px'},
  fontFamily: 'Inter',
  fontWeight:"400", }}
    ></CardContent>
    </Box>
   <StyledReadMoreButtons>
      <Button
          onClick={handleClick}
          variant="outlined"
          size="sm"
        
          aria-label="Explore Bahamas Islands"
        children={clicked?<News />:<Home /> }
        >
         {readMore}<IconButton >
<ArrowForwardTwoToneIcon />
          </IconButton>
        </Button>
        </StyledReadMoreButtons>
    </Card></Box>
    {/* </StyledCard> */}
    </>
  )
}

export default NewsHomeCard