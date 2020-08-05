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


const Header = (props) => {
    const [isOpen,
        setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container fluid>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <Link className="nav-link"  to="/users">Users</Link>
                        </NavItem>
                        <NavItem>
                            <Link  className="nav-link" id="posts" to="/posts">Posts</Link>
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
