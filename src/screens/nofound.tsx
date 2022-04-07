import { useState, useEffect } from 'react';
import { Styles404Container, Styles404Titulo, Styles404Text } from '../styles/styles';

const NofoundPage = () => {

    const [windowHeight, setWindowHeight] = useState(0);
    
    let resizeWindow = () => {
      setWindowHeight(window.innerHeight);
    };

    useEffect(() => {
      resizeWindow();
      window.addEventListener("resize", resizeWindow);
      return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    return(
        <Styles404Container windowHeight={windowHeight - 30}>
            <Styles404Titulo>404 OOPS!</Styles404Titulo>
            <Styles404Text>Lo sentimos, pero no encontramos lo que buscas</Styles404Text>
        </Styles404Container>
    )
}

export default NofoundPage;