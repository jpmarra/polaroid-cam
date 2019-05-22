import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import Photo from './Photo';
import AlbumContext from './AlbumContext';
import CorkBoard from './corkboard.jpg';
import { ReactComponent as BackArrow } from './backarrow.svg';

const Board = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-image: url(${CorkBoard});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    font-family: 'Permanent Marker', cursive;

    .back-arrow {
        padding: 1rem;
        width: 300px;
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

export default Album;
