import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../App.css';
import Camera from './Camera';
import Gate from './Gate';
import Stack from './Stack';
import Desk from '../assets/desk.jpg';

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1150);

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    });

    const updateDimensions = () => {
        window.innerWidth < 1150 ? setIsMobile(true) : setIsMobile(false);
    };

    if (isMobile) {
        return <Gate />;
    }

    return (
        <Container>
            <Inner>
                <Camera />
                <Stack />
            </Inner>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Desk});
    background-position: center;
    background-size: cover;
`;

const Inner = styled.div`
    position: relative;
    width: 1024px;
    height: max-content;
    margin-left: -350px;
`;

export default App;
