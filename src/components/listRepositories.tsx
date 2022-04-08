import { useContext } from 'react';
import { Col } from 'react-bootstrap';

import { UserContext } from '../context/userContext';

import { StyleCajaUser, StyleCajaUserContentImg, StyleCajaUserImg, StyleCajaNombre, StylesBtnVerde } from '../styles/styles';

interface itemProp {
    name: string;
    html_url: string;
    owner: {
        login: string;
    }
}

export const ListItems = () => {

    const { userState } = useContext(UserContext);

    return(
        <>
            { userState?.repositories && userState?.repositories.map( ({name, owner, html_url}:itemProp) => (
                <Col xs={12} sm={3} md={3} lg={3}>
                    <StyleCajaUser>
                        <StyleCajaNombre>{name}<small>{owner.login}</small></StyleCajaNombre>
                        <StylesBtnVerde href={html_url} target="_blank">
                            View on GitHub
                        </StylesBtnVerde>
                    </StyleCajaUser>
                </Col>
            ))}
        </>
    )
}