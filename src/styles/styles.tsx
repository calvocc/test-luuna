import styled, { ThemeConsumer } from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Container, Form } from "react-bootstrap";

type HeightProps = {
    windowHeight: number;
}

type CurrentProps = {
    current : boolean;
}

type ImgProps = {
    imgUrl: string;
}

export const StyleGeneral = styled.div<HeightProps>`
    background-color: ${props => props.theme.backgroundColor};
    min-height: ${props => props.windowHeight}px;
    padding-bottom: 50px;
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
export const Styles404Container = styled.div<HeightProps>`
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
export const StyledContainerSearch = styled(Container)`
    position: relative;
    z-index: 5;
    margin-bottom: 50px;
    margin-top: 50px;
`
export const StylesSearchContent = styled.div<ImgProps>`
    background-color: ${props => props.theme.whiteColor};
    background-image: ${props => props.imgUrl ? props.imgUrl : ''};
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 100%;
    min-height: 400px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    &::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${props => props.theme.blackColor};
        opacity: 0.9;
        z-index: 1;
    }
`

export const StylesSearchDivisor = styled.div<ImgProps>`
    background-image: ${props => props.imgUrl ? props.imgUrl : ''};
    background-size: cover;
    background-position: center top;
    height: 150px;
    width: 100%;
    z-index: 2;
    transform: rotateY(180deg);
    position: absolute;
    bottom: 0px;
    left: 0px;
`

export const StylesTitulo = styled.h1`
    color: ${props => props.theme.whiteColor};
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 20px;
    margin-top: 20px;   
    text-align: center;
`
export const StylesTituloCuerpo = styled.h3`
    color: ${props => props.theme.primaryColor};
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 0px;
    margin-top: 20px;   
    text-align: left;
`
export const StylesTituloCajaInfo = styled.p<HeightProps>`
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

export const StylesBtnVerde = styled.a`
    background-color: ${props => props.theme.borderColor};
    color: ${props => props.theme.blackColor};
    border-color: ${props => props.theme.secondaryColor};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    font-weight: bold;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
    text-decoration: none;
    padding-left: 20px;
    padding-right: 20px;
    max-height: 40px;
    width: 100%;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    &:hover{
        background-color: ${props => props.theme.secondaryActiveColor};
        border-color: ${props => props.theme.secondaryActiveColor};
        color: ${props => props.theme.whiteColor}
    }
    @media screen and (max-width: 600px) {
        margin-top: 20px;
    }
    @media screen and (max-width: 450px) {
        margin-top: 20px;
    }
`

export const StylesContentSpinner = styled.div<HeightProps>`
    width: 100%;
    height: ${props => props.windowHeight}px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyleNoData = styled.div`
    background-color: ${props => props.theme.whiteColor};
    color: ${props => props.theme.textColor};
`

export const StyleCajaUser = styled.div`
    background-color: ${props => props.theme.whiteColor};
    padding: 10px 10px 30px 10px;
    border-radius: 8px;
    margin-top: 60px;
    position: relative;
    box-shadow: 1px 1px 1px ${props => props.theme.borderColor};
`
export const StyleCajaUserContentImg = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    overflow: hidden;
    position: relative;
    margin-top: -45px;
    background-color: ${props => props.theme.whiteColor};
    border: 1px solid ${props => props.theme.borderColor};
    outline: 5px solid ${props => props.theme.whiteColor};
    margin: -45px auto 10px auto;
`
export const StyleCajaUserImg = styled.img`
    width: 80px;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
`
export const StyleCajaNombre = styled.p`
    color: ${props => props.theme.primaryColor};
    font-size: 18px;
    text-align: center;
    width: 100%;
    font-weight: bold;
    small{
        font-size: 12px;
        line-height: 12px;
        color: ${props => props.theme.textColor};
        display: block;
    }
`
export const StyleInput = styled(Form.Control)`
    outline: 5px solid rgba(255,255,255, 0.3);
    border-color: ${props => props.theme.whiteColor};
    &:focus{
        outline: 5px solid rgba(255,255,255, 0.3);
    }
`