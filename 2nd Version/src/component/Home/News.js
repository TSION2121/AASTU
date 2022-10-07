import { Box
  // ,Container
   ,
    Typography } from '@mui/joy'
import React from 'react'
// import { StyledImage } from '../../styles/NavBarHeader.styled'
// import Cards from '../card/Cards'
import NewsHomeCard from '../card/NewsHomeCard'
import image from '../image/news1.jpg'
import logo from '../image/logo.svg'
import image2 from '../image/homepage.jpg'
import { Grid } from '@mui/material'

function News() {
  //useState content

  const titleLogo ="University Launched New Brand, New Logo"
  const dateLogo ="September 7, 2022"
const contentLogo ="After a year of extensive discussions and collaborative creative development, Addis Ababa Science and Technology University unveiled its new brand identity, which includes a comprehensive brand strategy, communications materials..."

  const date1 = "February 23, 2021"
  const title1 = " Enhancing Diaspora connection for Science and Technology Development"

//  const image =  <StyledImage />
  const content1 = "Following the invitation of the Prime Minister,Dr. Abiy Ahmed, members of the Diaspora who have returned home are making various efforts to ensure the security of their country and contribute to the development and growth of our country. In connection with this, members...";

  const date2="August 12, 2022"
  const title2 = "Addis Ababa Science and Technology University and IIT ROORKEE Sign Partnership Agreement"
 const content2 = "Addis Ababa Science and Technology University has signed a partnership agreement with IIT ROORKEE.During the commencement of the ceremony, Prof.M. Parida deputy director of IIT ROORKEE briefly introduced the typical identities of and capacities of the Indian Institute of Technology–Roorkee "
  return (
    <>
        <Box  minWidth="80%"
         sx={{
            backgroundColor: 'black',
            position: 'relative',
            display: 'flex',
                     width: 'auto',
                     justifyContent: 'space-evenly',

        }}>

        <Grid container  columnSpacing={{ xs: '20px',   }} columns={{ xs: 3,}} 
        sx={{
                            margin: 'auto',

        }}
       >
           <Typography 
           sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            textAlign: 'center',      
            color: 'white', fontWeight: '900',
            fontSize:{xs:'2rem', sm: '70px', md: '100px', lg :"100px", xl: '200px' },
            textDecorationLine: 'underline',
            flex: '1 1 100%',
            flexFlow: 'column',
}}
           >NEWS / EVENTS</Typography>
     
        {/* <Cards /> */}
        
        <NewsHomeCard 
        title={titleLogo}
        content={contentLogo}
        date={dateLogo}
        image={logo}
        clicked={false}
        />
         
         <NewsHomeCard 
        title={title1}
        content={content1}
        date={date1}
        image={image}
        clicked={false}
        />
             <NewsHomeCard 
        title={title2}
        content={content2}
        date={date2}
        image={image2}
        clicked={false}
        />
        {/* < Cards /> */}
        </Grid>
        </Box>
    </>
  )
}

export default News