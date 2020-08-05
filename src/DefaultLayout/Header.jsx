import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
    Container
} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Tooltip } from 'reactstrap';


const Header = (props) => {
    const [isOpen,
        setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toolTipToggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <Container fluid>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <Link className="nav-link" id="TooltipExample"  to="/users">Users</Link>
                            <Tooltip placement="bottom" isOpen={tooltipOpen} target="TooltipExample" toggle={toolTipToggle}>List of user in jsonblog</Tooltip>
                        </NavItem>
                        <NavItem>
                            <Link  className="nav-link" to="/posts">Posts</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link"  to="/todos">Todos</Link>
                        </NavItem>
                    </Nav>
                    <NavbarText>JsonBlog</NavbarText>
                </Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;
