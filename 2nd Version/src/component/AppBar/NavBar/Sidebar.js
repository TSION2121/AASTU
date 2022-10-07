import SidebarItem from "./SidebarItem"
import items from "./menuItems.json"
import { MenuList } from "@mui/material"
import { StyledSidebar } from "./components/styles/Sidebar.styled"
// import items from './content'

export default function Sidebar(){
    return (
        <StyledSidebar>
        
       
         <MenuList  >
            if()
         { items.map((item, index) => {
         return <SidebarItem key={index} item={item} />
}) }
         
<li>
    {items.map((sub,i) => <a href={sub.path} key={i}>
        {sub.title}
        </a>)}
</li>

         </MenuList>
         
       
          
        </StyledSidebar>
    )
}