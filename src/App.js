import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Camera from './components/Camera';
import Stack from './components/Stack';
import Gate from './components/Gate';
import Desk from './assets/desk.jpg';

const Container = styled.div`
    background-image: url(${Desk});
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Inner = styled.div`
    position: relative;
    height: max-content;
    width: 1024px;
    margin-left: -350px;
`;

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

export default App;
