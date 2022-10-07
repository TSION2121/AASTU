import styled from "styled-components";
import image from '../component/image/news1.jpg';
import homePage from '../component/image/image.svg';
import gallery1 from '../component/image/gallery4.jpg';

export const StyledNavBarHeader = styled.div(
    {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: ' #1E1E31',
        justifyContent:"right",
        // color:"#FFF",

    }
)

export const StyledButtons = styled.button(
    {
        // color: 'white',
        color:"black",
        display: 'flex',
        flexDirection: 'row',
        borderColor: 'A38900',
        
        // text: 'black',
        "&:hover":{
            color:  'white',
            backgroundColor:'black',
            
            
    }
    
}
)
export const StyledNavBar = styled.div(
    {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent:"right",
        // color:"#FFF",
        "&:hover":{
            color: 'white',
            backgroundColor:'black',
        }
    }
)
export const StyledLine = styled.h1(
    {
        display: 'flex',
        flexDirection: 'row',
        color: '#A38900',
        fontSize: '30px',
        position: "relative",
        lineHeight: '30px',
left: "6.88%",
right: "52.92%",

       "&:hover":{
            color:  'white',
        }
    }
)

export const StyledImage = styled.img({

    backgroundImage: `url(${image})`,
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    alignSelf:'stretch'
})

export const StyledHomePageImage = styled.img({

    backgroundImage: `url(${gallery1})`,
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    alignSelf:'stretch'
})

export const StyledReadMoreButtons = styled.h1(
    {
         marginLeft: 'auto', 
         fontWeight: 600, 
         color:"white",
        backgroundColor: '#A38900', 
        display:'flex',
      flexDirection: 'row',
        // text: 'black',
        "&:hover":{
            color:  'white',
            backgroundColor:'black',
            
    }
}
)

export const Styledmenus = styled.ul(
    {
        color: 'white',
    }
)

export const StyledList = styled.li({
    listStyle: 'none',
    padding:' 0 0px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2.5,200px)',
    gridGap:'100px',
    alignItems:'center',
      justifyContent:'end',
      textAlign: 'center',
      position: 'relative',
})
export const StyledLink = styled.li({

      position: 'relative',
      textDecoration: 'none',
      fontSize: '1.3rem',
      fontWeight: '600',
      color: 'rgb(161, 154, 165)',
      transition: '0.3s ease-in-out',
})