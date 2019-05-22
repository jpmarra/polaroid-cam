import React from 'react';
import styled from 'styled-components';
import Desk from '../assets/desk.jpg';

const Gate = () => {
    return (
        <Container>
            <h1>Please view on Desktop for the best experience</h1>
        </Container>
    );
};

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

export default Gate;
