import React, {useEffect} from 'react';
// import Fade from 'react-reveal/Fade';


const Screen = ({title, screen: ScreenComponent}) => {
    useEffect(() => {
        document.title = `${title} || bla bla bla`;
    }, [title]);

    return (
        // <Fade>
            <ScreenComponent/>
        // </Fade>
    );
};

export default Screen;
