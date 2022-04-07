import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Button, Col, Row, Table} from "react-bootstrap";

type Props = {
    windowHeight: number;
}

type CurrentProps = {
    current : boolean;
}

export const StyleGeneral = styled.div<Props>`
    background-color: ${props => props.theme.backgroundColor};
    min-height: ${props => props.windowHeight}px;
    padding-bottom: 30px;
    position: relative;
`
export const StylesFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
`
export const StylesFooterTexto = styled.p`
    color: ${props => props.theme.textColor};
    font-size: 14px;
    margin-bottom: 0px;
    white-space: pre;
`
export const Styles404Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: ${props => props.windowHeight}px;
`
export const Styles404Titulo = styled.h4`
    color: ${props => props.theme.tittleColor};
    font-size: 50px;
    font-weight: 700;
`
export const Styles404Text = styled.p`
    color: ${props => props.theme.textColor};
    font-size: 14px;
`
export const StylesNavbar = styled(Navbar)`
    background: ${props => props.theme.primaryColor}; 
    background: -moz-linear-gradient(left,  ${props => props.theme.primaryColor} 36%,  ${props => props.theme.secondaryColor} 100%); 
    background: -webkit-linear-gradient(left,  ${props => props.theme.primaryColor} 36%,  ${props => props.theme.secondaryColor} 100%);
    background: linear-gradient(to right,  ${props => props.theme.primaryColor} 36%,  ${props => props.theme.secondaryColor} 100%);
    color: ${props => props.theme.textColor}; 
    border-color: transparent;
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 0px;
    padding-bottom: 0px;
    @media screen and (max-width: 600px) {
        min-height: 60px;
        position: relative;
    }
    @media screen and (max-width: 450px) {
        min-height: 60px;
        position: relative;
        > .navbar-toggler{
            margin-top: 10px;
        }
    }
`
export const StyleBrand = styled(Navbar.Brand)`
    background-color: ${props => props.theme.whiteColor};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    text-align: center;
    font-weight: 700;
    margin-left: 20px;
    margin-right: 0px;
    @media screen and (max-width: 600px) {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    @media screen and (max-width: 450px) {
        position: absolute;
        top: 10px;
        right: 10px;
    }
`
export const StyleNavLink = styled(Link)<CurrentProps>`
    color: ${props => props.theme.whiteColor} !important;
    font-weight: 500;
    padding: 20px !important;
    text-decoration: none;
    background-color: ${props => props.current ? props.theme.secondaryActiveColor : 'transparent'} !important;
    > svg {
        font-size: 20px;
        margin-right: 10px;
    }
    &:hover{
        background-color: ${props => props.theme.secondaryActiveColor};
    }
`
export const StylesTitulo = styled.h1`
    color: ${props => props.theme.tittleColor};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
    margin-top: 20px;    
`
export const StylesTituloCajaInfo = styled.p<Props>`
    color: ${props => props.theme.tittleColor};
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
    text-decoration: none !important;
`
export const StylesTextoCaja = styled.p`
    color: ${props => props.theme.textColor};
    font-size: 14px;
    margin-bottom: 0px;
    overflow-wrap: break-word;
    text-decoration: none;
`
export const StylesCajaInfo = styled.div`
    background-color: ${props => props.theme.whiteColor};
    padding: 15px;
    margin-bottom: 5px;
`

export const StylesBtnVerde = styled(Button)`
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.whiteColor};
    border-color: ${props => props.theme.secondaryColor};
    font-weight: bold;
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
    max-height: 40px;
    &:hover{
        background-color: ${props => props.theme.secondaryActiveColor};
        border-color: ${props => props.theme.secondaryActiveColor};
    }
    @media screen and (max-width: 600px) {
        margin-top: 20px;
    }
    @media screen and (max-width: 450px) {
        margin-top: 20px;
    }
`

export const StylesContentSpinner = styled.div<Props>`
    width: 100%;
    height: ${props => props.windowHeight}px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyleNoData = styled.div`
    background-color: ${props => props.theme.whiteColor};;
    color: ${props => props.theme.textColor};
`