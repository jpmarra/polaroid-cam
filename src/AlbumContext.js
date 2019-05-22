import React, { createContext, useState } from 'react';
import uniqid from 'uniqid';
import { useLocalStorage } from './useLocalStorage';
import Sleepy from './sleepyboy.jpg';
import Golden from './goldboy.jpg';
import Doggo from './doggo.jpg';

const AlbumContext = createContext();

export default AlbumContext;

export const AlbumProvider = ({ children }) => {
    const [photoAlbum, setPhotoAlbum] = useLocalStorage('photoAlbum', []);
    const [stockPhotos, setStockPhotos] = useState([
        {
            id: uniqid('stock-'),
            image: Sleepy,
            note: 'Sleepy boy',
            time: Date.now(),
        },
        {
            id: uniqid('stock-'),
            image: Golden,
            note: 'Golden boy',
            time: Date.now() + 1,
        },
        {
            id: uniqid('stock-'),
            image: Doggo,
            note: 'Doggo',
            time: Date.now() + 2,
        },
    ]);

    const addPhoto = _photo => {
        const imageId = uniqid('photo-');
        const newAlbum = [
            {
                id: imageId,
                image: _photo.toDataURL(),
                note: '',
                time: Date.now(),
            },
            ...photoAlbum,
        ];

        newAlbum.sort((a, b) => (a.time > b.time ? -1 : 1));
        setPhotoAlbum(newAlbum);
    };

    const editPhoto = (id, newNote) => {
        const album = id.includes('stock') ? stockPhotos : photoAlbum;
        const photo = album.find(photo => photo.id === id);
        const idx = album.indexOf(photo);
        const newAlbum = [...album];
        photo.note = newNote;
        newAlbum[idx] = photo;
        album === stockPhotos
            ? setStockPhotos([...newAlbum])
            : setPhotoAlbum([...newAlbum]);
    };
    return (
        <AlbumContext.Provider
            value={{
                photoAlbum: [...photoAlbum, ...stockPhotos],
                addPhoto,
                editPhoto,
            }}
        >
            {children}
        </AlbumContext.Provider>
    );
};
