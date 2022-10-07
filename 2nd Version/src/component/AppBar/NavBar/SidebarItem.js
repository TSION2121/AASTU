import { useState } from "react"
import { StyledSidebarContent, StyledSidebarItem, StyledSidebarItemOpen, StyledSidebarItemPlain, StyledSidebarTitle, StyledToggleButton } from "./Sidebar.styled"

export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (
            <>
            {open ? <StyledSidebarItemOpen /> : <StyledSidebarItem />}
                <StyledSidebarTitle>
                    <span>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}    
                    </span> 
                    <StyledToggleButton  onClick={() => setOpen(!open)}></StyledToggleButton>
                </StyledSidebarTitle>
                <StyledSidebarContent>
                     { item.childrens.map((child, index) => {return ( <> 
                   <li> <a href='/'> <SidebarItem key={index} item={child} /></a></li>
                  
                   
                     {/* <li  >{item}
                    {child.childrens.map((detail, i) => 
                    <a className="active" href="/" key={i}>{detail.title} </a>)}</li> */}
                     </>)} 
                    ) } 
                </StyledSidebarContent>
        </>
        )
    }else{
        return (
            <StyledSidebarItemPlain href={item.path || "#"} >
                { item.icon && <i className={item.icon}></i> }
                {item.title}
            </StyledSidebarItemPlain>
        )
    }
    
}