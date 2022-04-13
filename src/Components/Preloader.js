import React from 'react';
import {Container} from "react-bootstrap";
import logo from '../logo.svg';
const Preloader = () => {
    return (
        <Container fluid={true} className={'preloader '}>
            <div className={'spinner'}>
                <img width={200} height={200} src={logo}/>
            </div>
        </Container>
    );
};

export default Preloader;