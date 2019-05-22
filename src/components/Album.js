import React, { useContext } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import AlbumContext from '../context/AlbumContext';
import CorkBoard from '../assets/corkboard.jpg';
import Photo from './Photo';
import { ReactComponent as BackArrow } from '../assets/backarrow.svg';

const Album = () => {
    const { photoAlbum } = useContext(AlbumContext);
    return (
        <Board>
            <Link to="/">
                <BackArrow className="back-arrow" />
            </Link>
            <div className="header-container">
                <span className="add-note">Click a photo to add a note</span>
            </div>
            <Photos>
                {photoAlbum.map(photo => (
                    <li className="board-photo" key={photo.id}>
                        <Photo photo={photo} />
                    </li>
                ))}
            </Photos>
        </Board>
    );
};

const Board = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-image: url(${CorkBoard});
    background-size: cover;
    background-position: center;
    overflow: hidden;

    .back-arrow {
        width: 300px;
        padding: 1rem;
    }

    .header-container {
        display: flex;
        justify-content: center;
    }
    .add-note {
        text-transform: uppercase;
        text-align: center;
        font-size: 2rem;
    }
`;
const Photos = styled.ul`
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .board-photo {
        margin: 1.5rem;
        list-style: none;

        &:nth-child(even) {
            transform: rotate(-2deg);
        }

        &:nth-child(3n) {
            position: relative;
            top: -5px;
        }

        &:nth-child(5n) {
            transform: rotate(5deg);
            position: relative;
            right: 5px;
        }

        &:hover {
            transform: scale(1.05);
            transition: 0.1s;
            transition-timing-function: ease-in-out;
            z-index: 5;
        }
    }
`;

export default Album;
