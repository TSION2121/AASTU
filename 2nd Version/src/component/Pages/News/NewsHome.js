import { Box
    // ,Container
     ,
      Typography } from '@mui/joy'
  import React, { useEffect } from 'react'
  // import { StyledImage } from '../../styles/NavBarHeader.styled'
  // import Cards from '../card/Cards'
  import image from '../../image/news1.jpg'
  import logo from '../../image/logo.svg'
  import image2 from '../../image/homepage.jpg'
import ReusableCard from '../../card/ReusableCard'
import { Drawer, Grid } from '@mui/material'
  
  
 
    //useState content
  
   

     
const NewsHome = () => {
const [news,setNews] = React.useState(null)
const getNews = () => {
  fetch('http://localhost:1122/getNews')
  .then(response => response.json())
  .then((response) => setNews(response))
  .catch(err => console.log(err))

}
React.useEffect(()=> getNews(),[])

console.log(news)
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
//     {
//       id : 4,
//       date :"August 12, 2022",
//       title : "Addis Ababa Science and Technology University and IIT ROORKEE Sign Partnership Agreement",
//      content : "Addis Ababa Science and Technology University has signed a partnership agreement with IIT ROORKEE.During the commencement of the ceremony, Prof.M. Parida deputy director of IIT ROORKEE briefly introduced the typical identities of and capacities of the Indian Institute of Technology–Roorkee ",
//      pic:image2
//  },
//  {
//   id : 5,
//   date :"August 12, 2022",
//   title : "Addis Ababa Science and Technology University and IIT ROORKEE Sign Partnership Agreement",
//  content : "Addis Ababa Science and Technology University has signed a partnership agreement with IIT ROORKEE.During the commencement of the ceremony, Prof.M. Parida deputy director of IIT ROORKEE briefly introduced the typical identities of and capacities of the Indian Institute of Technology–Roorkee ",
//  pic:image2
// },

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
        display: 'block',
        flexDirection: {xs : 'row', sm:'row', md : 'column', lg : 'column'}, 
       
  width: 'auto',
  height: 'auto',
  justifyContent: 'center',
}}>
   <Typography 
       sx={{ 
        background:'black',
        display: 'flex', 
        flexDirection: 'column',
        textAlign: 'center',      
        color: 'white', fontWeight: '900',
        fontSize:{xs:'1.5rem', sm: '70px', md: '100px', lg :"100px", xl: '200px' },
        textDecorationLine: 'underline',
        flex: '1 1 100%',
    
        // display: 'flex', 
        // flexDirection: 'column',
        // flex: '1 1 100%',
        flexFlow: 'column',

}}
       >NEWS/EVENTS</Typography>
     
    <Grid container  
    rowSpacing={{ xs: '40px', md: '300px',  }} 
    columnSpacing={{ xs: '0px', md: '30px'}}
    columns={{ xs: 2, }}
    sx={{ 
     
    // textAlign: { xs: 'center', sm: 'start' },

}}>
  
 

    {/* <Cards /> */}
    {news?.map((data, index) => {
      return(
        <>
         <Grid item 
        //  xs={2}
        //   sm={7} md={5} lg={3} xl={1} 

         sx={{ display: 'flex',
         flexDirection: '',
         justifyContent: 'space-evenly',
         // gap: 'auto ', 
         margin: 'auto',
         alignItems: 'stretch',
         flex : '1 1 30%',
         width:{xs:'70vw', sm: '80vw', md: '100vw', lg :"40vw", xl: '100vw' },
          // marginRight: {sm: '400px',}
        
        }}
         key={index}>
    <ReusableCard  key={index}
    id={data.id}
    title={data.title}
    content={data.content}
    date={data.date}
    image={data.pic}
    clicked={false}
    />
    </Grid>
    
    {/* <Grid item xs={2} sm={4} md={7} key={index}>
     <ReusableCard 
     key={index}
    title={data.title}
    content={data.content}
    date={data.date}
    image={data.pic}
    clicked={false}
    />
        </Grid> */}

     
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