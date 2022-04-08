import {Navbar, Nav, Container} from "react-bootstrap";
import { Outlet, useMatch, useResolvedPath } from "react-router-dom";
import {BsGithub, BsPerson} from 'react-icons/bs';
import { StylesNavbar, StyleBrand, StyleNavLink } from '../styles/styles';

import { LinkProps } from "react-router-dom";

import * as ROUTES from '../constans/rutas';

const NavbarComponent = () => {

    const CustomLink = ({ children, to, ...props }: LinkProps) => {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return(
            <StyleNavLink to={to} current={match ? true : false} {...props}> {children}</StyleNavLink>
        )
    }

    return(
        <>
            <StylesNavbar expand="lg" sticky="top">
                <Container fluid>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-between">
                    <StyleBrand>Z</StyleBrand>
                    <Nav>
                        <CustomLink to={ROUTES.REPOSITORIES}><BsGithub/> Repositories</CustomLink>
                        <CustomLink to={ROUTES.USERS}><BsPerson /> Uers</CustomLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </StylesNavbar>
            <Outlet />
        </>
    )
}

export default NavbarComponent;