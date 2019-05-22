import React, { createContext, useState } from 'react';
import uniqid from 'uniqid';
import { useLocalStorage } from './hooks/useLocalStorage';
import Rigs from './assets/rigs.jpg';
import Sad from './assets/sadboy.jpg';
import Doggo from './assets/doggo.jpg';

const AlbumContext = createContext();

export default AlbumContext;

export const AlbumProvider = ({ children }) => {
    const [photoAlbum, setPhotoAlbum] = useLocalStorage('photoAlbum', []);
    const [stockPhotos, setStockPhotos] = useState([
        {
            id: uniqid('stock-'),
            image: Rigs,
            note: 'My boy',
            time: Date.now(),
        },
        {
            id: uniqid('stock-'),
            image: Sad,
            note: 'Sad boy',
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
                image: _photo.toDataURL('image/jpeg', 0.5),
                note: '',
                time: Date.now(),
            },
            ...photoAlbum,
        ];

        newAlbum.sort((a, b) => (a.time > b.time ? -1 : 1));
        setPhotoAlbum(newAlbum);
    };

    const getPhotoInfoById = id => {
        const album = id.includes('stock') ? stockPhotos : photoAlbum;
        const photo = album.find(photo => photo.id === id);
        const idx = album.indexOf(photo);
        const newAlbum = [...album];
        return {
            album,
            photo,
            idx,
            newAlbum,
        };
    };

    const editPhoto = (id, newNote) => {
        const { album, photo, idx, newAlbum } = getPhotoInfoById(id);
        photo.note = newNote;
        newAlbum[idx] = photo;
        album === stockPhotos
            ? setStockPhotos([...newAlbum])
            : setPhotoAlbum([...newAlbum]);
    };

    const deletePhoto = id => {
        const { album, idx, newAlbum } = getPhotoInfoById(id);
        newAlbum.splice(idx, 1);
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
                deletePhoto,
            }}
        >
            {children}
        </AlbumContext.Provider>
    );
};
