import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap';
import {Link} from 'react-router-dom';


const Header = (props) => {
    const [isOpen,
        setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container fluid className="px-0">
            {/* <NavbarText style={{color:'#9932cc', fontSize:'30px', fontWeight:'bolder'}}>JsonBlog</NavbarText> */}
            <Navbar color="light" light expand="md">
                <NavbarBrand style={{color:'#9932cc', fontSize:'30px', fontWeight:'bolder'}}>JsonBlog</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link className="nav-link"  to="/">Home</Link>
                        </NavItem>
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
                    
                </Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;
