                      import styled from "styled-components";

export const StyledSidebar = styled.div({
width: '100%',
flexShrink: '39',
backgroundColor: 'lavender',
height: '100%',
overflow: 'auto',
display: 'flex',
flexirection: 'row',
color: 'dodgerblue'


})




export const StyledSidebarTitle =styled.div({
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.2em',
    fontWeight: '900',
    justifyContent: 'space-around',
    width: 'fit-content',
    cursor: 'pointer',
    transition: 'transform .3s',
    whiteSpace: 'nowrap',
    backgroundColor: 'Background',
    color:'#A38900'
    })
    export const StyledSidebarButton = styled.i`
    
    `
    export const StyledToggleButton = styled(StyledSidebarButton)`
    cursor: pointer;
    transition: transform .3s;
    
    `
    export const StyledSidebarContent = styled.div({
    paddingTop: '.25em',
    height: 'fit-content',
    overflow: 'hidden',
    
    })
    export const StyledSidebarItem = styled.div`
    padding: .75em 1em;
    display: flex;
    transition: background-color .15s;
    border-radius: 5px;
    &:hover{
        background-color: rgba(255, 255, 255, .1);

    }
    `
    export const StyledSidebarItemOpen = styled.div`
    transform: rotate(180deg);
    `

    export const StyledSidebarItemPlain = styled.a`
    color: paleblue;
    text-decoration: none;
    &:hover{
        text-decoration: underline;

    }
    i{
        display: inline-block;
        width: 1.7em;
    }
    `
   