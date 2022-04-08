import { useContext } from 'react';
import { Col, Container, Row, } from 'react-bootstrap';

import { Search } from '../components/search';
import { ListItems } from '../components/listUsers';
import { UserContext } from '../context/userContext';

import { StylesTitulo, StylesSearchContent, StyledContainerSearch, StylesSearchDivisor, StylesTituloCuerpo } from '../styles/styles';

import imgUrl from '../asses/stock-photo-server-room-d-illustration-with-node-base-programming-data-design-element-concept-of-big-data-1024337071.jpeg';
import svg from '../asses/divisor.svg';

const UsersPage = () => {

    const { userState } = useContext(UserContext);
    return(
        <>
            <StylesSearchContent imgUrl={`url(${imgUrl})`}>
                <StyledContainerSearch>
                    <Row className='justify-content-center'>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <StylesTitulo>Search for GitHub users</StylesTitulo>
                            <Search searchtype="users"/>
                        </Col>
                    </Row>
                </StyledContainerSearch>
                <StylesSearchDivisor imgUrl={`url(${svg})`}/>
            </StylesSearchContent>
            <Container>
                { userState.users?.length ?
                    <Row className='justify-content-center'>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <StylesTituloCuerpo>Search result</StylesTituloCuerpo>
                        </Col>
                    </Row>
                    : null
                }
                <Row>
                    <ListItems />
                </Row>
            </Container>
        </>
    )
}

export default UsersPage;