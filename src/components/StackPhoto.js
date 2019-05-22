import React from 'react';
import styled from 'styled-components';

const StackPhoto = ({ image, note }) => (
    <SmallPolaroid>
        <img className="image" src={image} alt="Stack" />
        <div className="note">
            <span>{note}</span>
        </div>
    </SmallPolaroid>
);

const SmallPolaroid = styled.div`
    background-color: #f4f4ef;
    border: 1px solid #fff;
    padding: 10px 10px 0 10px;
    width: 280px;
    height: 260px;
    box-shadow: 0px 2px 15px #333;

    .image {
        width: 280px;
    }
    .note {
        font-size: 1.3rem;
        color: black;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
    }
`;

export default StackPhoto;
