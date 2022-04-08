import { useState, useEffect } from 'react';
import { Styles404Container, Styles404Titulo, Styles404Text } from '../styles/styles';

import {useDimensions} from "../hooks/useDimensions";

const NofoundPage = () => {

    const { windowHeight } = useDimensions();

    return(
        <Styles404Container windowHeight={windowHeight - 30}>
            <Styles404Titulo>404 OOPS!</Styles404Titulo>
            <Styles404Text>Lo sentimos, pero no encontramos lo que buscas</Styles404Text>
        </Styles404Container>
    )
}

export default NofoundPage;