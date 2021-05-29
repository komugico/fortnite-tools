import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class HeaderModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar bg="light" variant="light">
                <LinkContainer to="/">
                    <Navbar.Brand href="/">Fortnite Tools</Navbar.Brand>
                </LinkContainer>
                <NavDropdown title="Quest">
                    <LinkContainer to="/quest/list">
                        <NavDropdown.Item>List</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
            </Navbar>
        );
    }
}

export default HeaderModule;