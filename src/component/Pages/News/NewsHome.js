import { Box
    // ,Container
     ,
      Typography } from '@mui/joy'
  import React from 'react'
  // import { StyledImage } from '../../styles/NavBarHeader.styled'
  // import Cards from '../card/Cards'
  import image from '../../image/news1.jpg'
  import logo from '../../image/logo.svg'
  import image2 from '../../image/homepage.jpg'
import ReusableCard from '../../card/ReusableCard'
import { Drawer, Grid } from '@mui/material'
  
  
 
    //useState content
  
   

     
const NewsHome = () => {
const News = [
   
 {
         id : 1,
         title :"University Launched New Brand, New Logo",
         date :"September 7, 2022",
       content :"After a year of extensive discussions and collaborative creative development, Addis Ababa Science and Technology University unveiled its new brand identity, which includes a comprehensive brand strategy, communications materials...",
       pic:logo
      
    },
  {
         id : 2,
         date : "April 24 to May 02, 2021",
     title : " Enhancing Diaspora connection for Science and Technology Development",
  
  //   image =  <StyledImage />
     content : "Following the invitation of the Prime Minister,Dr. Abiy Ahmed, members of the Diaspora who have returned home are making various efforts to ensure the security of their country and contribute to the development and growth of our country. In connection with this, members...",
 pic: image
    }
    ,
  {
         id : 3,
         date :"August 12, 2022",
         title : "Addis Ababa Science and Technology University and IIT ROORKEE Sign Partnership Agreement",
        content : "Addis Ababa Science and Technology University has signed a partnership agreement with IIT ROORKEE.During the commencement of the ceremony, Prof.M. Parida deputy director of IIT ROORKEE briefly introduced the typical identities of and capacities of the Indian Institute of Technology–Roorkee ",
        pic:image2
    },
    {
      id : 3,
      date :"August 12, 2022",
      title : "Addis Ababa Science and Technology University and IIT ROORKEE Sign Partnership Agreement",
     content : "Addis Ababa Science and Technology University has signed a partnership agreement with IIT ROORKEE.During the commencement of the ceremony, Prof.M. Parida deputy director of IIT ROORKEE briefly introduced the typical identities of and capacities of the Indian Institute of Technology–Roorkee ",
     pic:image2
 },
 {
  id : 3,
  date :"August 12, 2022",
  title : "Addis Ababa Science and Technology University and IIT ROORKEE Sign Partnership Agreement",
 content : "Addis Ababa Science and Technology University has signed a partnership agreement with IIT ROORKEE.During the commencement of the ceremony, Prof.M. Parida deputy director of IIT ROORKEE briefly introduced the typical identities of and capacities of the Indian Institute of Technology–Roorkee ",
 pic:image2
},

    // {

    //     title: '',
    //     date: '',
    //     content : '',
    // },
    // {

    //     title: '',
    //     date: '',
    //     content : '',
    // }

]

//     const titleLogo ="University Launched New Brand, New Logo"
//     const dateLogo ="September 7, 2022"
//   const contentLogo ="After a year of extensive discussions and collaborative creative development, Addis Ababa Science and Technology University unveiled its new brand identity, which includes a comprehensive brand strategy, communications materials..."
  
//     const date1 = "April 24 to May 02, 2021"
//     const title1 = " Enhancing Diaspora connection for Science and Technology Development"
  
//   //  const image =  <StyledImage />
//     const content1 = "Following the invitation of the Prime Minister,Dr. Abiy Ahmed, members of the Diaspora who have returned home are making various efforts to ensure the security of their country and contribute to the development and growth of our country. In connection with this, members...";
  
//     const date2="August 12, 2022"
//     const title2 = "Addis Ababa Science and Technology University and IIT ROORKEE Sign Partnership Agreement"
//    const content2 = "Addis Ababa Science and Technology University has signed a partnership agreement with IIT ROORKEE.During the commencement of the ceremony, Prof.M. Parida deputy director of IIT ROORKEE briefly introduced the typical identities of and capacities of the Indian Institute of Technology–Roorkee "
  return (
    <>
    <Box  minWidth="80%"
     sx={{
        backgroundColor: 'black',
        position: 'relative',
        display: 'flex',
        flexDirection: {xs : 'row', sm:'column'}, 
        flexGrow:'1',

          
    }}>

       <Typography 
       sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        textAlign: 'center',      
        color: 'white', fontWeight: '900',
        fontSize: '30px', textDecorationLine: 'underline',

}}
       >NEWS/EVENTS</Typography>
    <Grid container  spacing={{ xs: 'auto', md: 21 }} columns={{ xs: 4, sm: 8, md: 12 }}
    
    sx={{ 
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '80px ', 
      margin: '60px',
      alignItems: 'center',
    // textAlign: { xs: 'center', sm: 'start' },
    mt: { xs: 1.5, sm: 0 },

}}>

    {/* <Cards /> */}
    {News.map((data, index) => {
      return(
        <>
         <Grid item xs={2} sm={4} md={7} key={index}>
    <ReusableCard  key={index}
    id={data.id}
    title={data.title}
    content={data.content}
    date={data.date}
    image={data.pic}
    clicked={false}
    />
    </Grid>
    
    <Grid item xs={2} sm={4} md={7} key={index}>
     <ReusableCard 
     key={index}
    title={data.title}
    content={data.content}
    date={data.date}
    image={data.pic}
    clicked={false}
    />
        </Grid>

     
     {/* <ReusableCard 
    title={news2.title}
    content={news2.content}
    date={news2.date}
    image={image}
    clicked={false}
    />
         <ReusableCard 
    title={news3.title}
    content={news3.content}
    date={news3.date}
    image={image2}
    clicked={false}
    /> */}
  </>
  )})}
  
    {/* < Cards /> */}
    </Grid>
    </Box>
</>

  )
}

export default NewsHome