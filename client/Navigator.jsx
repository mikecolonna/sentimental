import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Navigator extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <span>Sentimental</span>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1}>
                        Get started
                    </NavItem>
                    <NavItem eventKey={2}>
                        About us
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}
