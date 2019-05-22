import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import AlbumContext from '../AlbumContext';
import { ReactComponent as Delete } from '../assets/delete.svg';

const LargePolaroid = styled.div`
    position: relative;
    width: 320px;
    height: 290px;
    padding: 10px 10px 0 10px;
    box-shadow: 0px 2px 15px #333;
    background-color: #f4f4ef;
    border: 1px solid #fff;

    .photo-container {
        width: 320px;
        height: 240px;
    }
    .large-photo {
        width: 320px;
        height: 240px;
        cursor: pointer;
    }

    .large-note {
        max-width: 320px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
        font-size: 1.3rem;
        color: black;
        cursor: pointer;
    }

    .note-input {
        width: 278px;
        background: none;
        border: none;
        border-bottom: 1px solid black;
        font-family: 'Permanent Marker', cursive;
        font-size: 1.3rem;
    }

    .save-button {
        height: 29px;
        padding: 0 5px;
        border: none;
        border-radius: 0;
        background-color: black;
        color: #f4f4ef;
        text-transform: uppercase;
        font-weight: bold;
    }

    .delete-button {
        position: absolute;
        top: 0;
        right: 0;
        margin-top: -10px;
        margin-right: -10px;
        width: 30px;
        cursor: pointer;
    }
`;

const Photo = ({ photo }) => {
    const { editPhoto, deletePhoto } = useContext(AlbumContext);
    const { id, image, note } = photo;
    const [editing, setEditing] = useState(false);
    const [newNote, setNewNote] = useState(note);

    return (
        <LargePolaroid onClick={() => setEditing(true)}>
            <div className="photo-container">
                <img className="large-photo" src={image} alt="Polaroid" />
            </div>
            {editing ? (
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        editPhoto(id, newNote);
                        setEditing(false);
                    }}
                >
                    <input
                        className="note-input"
                        value={newNote}
                        maxlength="26"
                        onChange={e => setNewNote(e.target.value)}
                    />
                    <button className="save-button" type="submit">
                        Save
                    </button>
                    <div role="button" onClick={() => deletePhoto(id)}>
                        <Delete className="delete-button" />
                    </div>
                </form>
            ) : (
                <div className="large-note">{newNote}</div>
            )}
        </LargePolaroid>
    );
};

export default Photo;
