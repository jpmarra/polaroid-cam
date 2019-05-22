import React from 'react';
import styled from 'styled-components';
import desk from './desk.jpg';

const Container = styled.div`
    font-family: 'Permanent Marker', cursive;
    background-image: url(${desk});
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Gate = () => {
    return (
        <Container>
            <h1>Please view on Desktop for the best experience</h1>
        </Container>
    );
};

export default Gate;
