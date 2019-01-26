import React, { Component } from 'react';
import Camera from 'react-camera';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.takePicture = this.takePicture.bind(this);
    }

    takePicture() {
        try {
            this.camera.capture()
                .then(blob => {
                    this.img.src = URL.createObjectURL(blob);
                    this.img.onload = () => { URL.revokeObjectURL(this.src); }
                })
        } catch(err) {
            console.log(err.message);
        }

    }

    render() {
        return (
            <div style={style.container}>
            <Camera
            style={style.preview}
            ref={(cam) => {
                console.log('hello');
                this.camera = cam;
            }}
            >
            <div style={style.captureContainer} onClick={this.takePicture}>
            <div style={style.captureButton} />
            </div>
            </Camera>
            <img
            style={style.captureImage}
            ref={(img) => {
                this.img = img;
            }}
            />
            </div>
        );
    }
}

const style = {
    preview: {
        position: 'relative',
        border: '1px solid red',
        width: '100%',
        height: '100%'
    },
    captureContainer: {
        display: 'flex',
        position: 'absolute',
        justifyContent: 'center',
        zIndex: 1,
        bottom: 0,
        width: '100%',
        border: '1px solid blue'
    },
    captureButton: {
        backgroundColor: '#fff',
        borderRadius: '50%',
        height: 56,
        width: 56,
        color: '#123',
        margin: 20
    },
    captureImage: {
        width: '100%',
    }
};
