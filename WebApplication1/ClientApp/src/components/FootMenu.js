import React, { Component } from 'react';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


export class FootMenu extends Component {
    static displayName = FootMenu.name;

    render() {
        return (
            <div className="footer">
                <Container className="footer-padding fluid">
                    <Nav className="justify-content-center">
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>|</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/counter">Counter</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>|</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/game">Game</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>|</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/fetch-data">Weather</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>|</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </div>
        );
    }
}