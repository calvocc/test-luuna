import { useContext } from 'react';
import { Col } from 'react-bootstrap';

import { UserContext } from '../context/userContext';

import { StyleCajaUser, StyleCajaUserContentImg, StyleCajaUserImg, StyleCajaNombre, StylesBtnVerde } from '../styles/styles';

interface itemProp {
    login: string;
    id: string;
    avatar_url: string;
    html_url: string;
}

export const ListItems = () => {

    const { userState } = useContext(UserContext);

    return(
        <>
            { userState?.users && userState?.users.map( ({login, id, avatar_url, html_url}:itemProp) => (
                <Col xs={12} sm={3} md={3} lg={3}>
                    <StyleCajaUser>
                        <StyleCajaUserContentImg>
                            <StyleCajaUserImg src={avatar_url}/>
                        </StyleCajaUserContentImg>
                        <StyleCajaNombre>{login}<small>{id}</small></StyleCajaNombre>
                        <StylesBtnVerde href={html_url} target="_blank">
                            View on GitHub
                        </StylesBtnVerde>
                    </StyleCajaUser>
                </Col>
            ))}
        </>
    )
}