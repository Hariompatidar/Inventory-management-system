import React from 'react' ; 
import { ProSidebar  , Menu  , MenuItem , SubMenu, SidebarHeader, SidebarContent, SidebarFooter} from 'react-pro-sidebar'  ; 
import 'react-pro-sidebar/dist/css/styles.css';


function Sidebar() {
  return (
    <div className='h-screen' >
        <ProSidebar width="270px"  breakPoint="lg" toggled="true" onToggle="true" collapsedWidth="200px" >
        <SidebarHeader><h2>ProSidebar</h2></SidebarHeader>
        <SidebarContent>
            <Menu>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Inventory</MenuItem>
            </Menu>
            
        </SidebarContent>
        <SidebarFooter>@sidebarfooter</SidebarFooter>
        
      </ProSidebar>
      </div>
    
  )
}

export default Sidebar ; 