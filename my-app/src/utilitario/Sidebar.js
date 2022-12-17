import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Side = () => {

    return (
        <div>
            <Sidebar>
                <Menu>
                    <MenuItem routerLink={<Link to="/documentation" />}> Documentation</MenuItem>
                    <MenuItem routerLink={<Link to="/calendar" />}> Calendar</MenuItem>
                    <MenuItem routerLink={<Link to="/e-commerce" />}> E-commerce</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default Side()