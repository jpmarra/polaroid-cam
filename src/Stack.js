import React, { useContext } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import StackPhoto from './StackPhoto';
import AlbumContext from './AlbumContext';
import { ReactComponent as AlbumArrow } from './albumArrow.svg';

const Collection = styled.ul`
    position: absolute;
    width: 300px;
    height: 300px;
    bottom: 0;
    right: 0;
    margin-right: -150px;
    margin-bottom: -30px;

    .photo {
        position: absolute;
        list-style: none;
        &:nth-child(2) {
            transform: rotate(10deg);
        }
        &:nth-child(3) {
            transform: rotate(-15deg);
        }
    }

    .album-arrow {
        position: absolute;
        width: 300px;
        left: 0;
        bottom: 20px;
        margin-left: -300px;
    }
`;

const Stack = () => {
    const { photoAlbum } = useContext(AlbumContext);
    const photoStack =
        photoAlbum.length > 3 ? [...photoAlbum].slice(0, 3) : photoAlbum;
    return (
        <Collection>
            <Link to="album">
                {[...photoStack].reverse().map(photo => (
                    <li className="photo" key={photo.id}>
                        <StackPhoto image={photo.image} note={photo.note} />
                    </li>
                ))}
                <AlbumArrow className="album-arrow" />
            </Link>
        </Collection>
    );
};

export default Stack;
