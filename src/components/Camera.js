import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import AlbumContext from '../context/AlbumContext';
import PolaroidCam from '../assets/polaroidcam.png';
import { ReactComponent as Arrow } from '../assets/arrow.svg';

const Camera = () => {
    const context = useContext(AlbumContext);
    const [cameraEnabled, setCameraEnabled] = useState(false);
    let _photo;
    let _camera;

    const takePhoto = () => {
        _photo.width = _camera.videoWidth;
        _photo.height = _camera.videoHeight;

        _photo
            .getContext('2d')
            .drawImage(_camera, 0, 0, _camera.videoWidth, _camera.videoHeight);

        _camera.srcObject.getVideoTracks().forEach(track => {
            track.stop();
        });

        context.addPhoto(_photo);
    };

    const displayVideo = () => {
        if (!cameraEnabled) {
            return (
                <Message onClick={() => setCameraEnabled(true)}>
                    Click here to enable your camera
                </Message>
            );
        } else {
            return (
                <video
                    autoPlay
                    ref={c => {
                        _camera = c;
                        if (_camera) {
                            navigator.mediaDevices
                                .getUserMedia({ video: true })
                                .then(stream => (_camera.srcObject = stream));
                        }
                    }}
                    controls={false}
                    className="video"
                />
            );
        }
    };

    return (
        <Cam>
            <Arrow className="arrow" />
            {displayVideo()}
            <canvas ref={c => (_photo = c)} style={{ display: 'none' }} />
            <button className="shutter-button" onClick={takePhoto} />
        </Cam>
    );
};

const Cam = styled.div`
    position: relative;
    width: 850px;
    height: 620px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${PolaroidCam});
    background-size: cover;
    background-position: center;
    transform: scale(0.7);

    .video {
        height: 60%;
        margin-top: 50px;
    }

    .shutter-button {
        position: absolute;
        width: 80px;
        height: 30px;
        top: 61px;
        right: 75px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .arrow {
        position: absolute;
        width: 50%;
        top: 0;
        margin-left: 600px;
    }
`;

const Message = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    height: 360px;
    width: 520px;
    cursor: pointer;
    font-size: 1.7rem;
    color: #f4f4ef;
`;

export default Camera;
