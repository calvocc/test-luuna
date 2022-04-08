import {useState, useEffect} from 'react';

export const useDimensions = () => {

    const [windowHeight, setWindowHeight] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    let resizeWindow = () => {
        setWindowHeight(window.innerHeight);
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
      resizeWindow();
      window.addEventListener("resize", resizeWindow);
      return () => window.removeEventListener("resize", resizeWindow);
    }, []);


    return {
        windowHeight,
        windowWidth
    }
}