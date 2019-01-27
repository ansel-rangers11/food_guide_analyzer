import React, { Component } from 'react';
import Camera from 'react-camera';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.takePicture = this.takePicture.bind(this);
        this.state = {
            dataCapture: null
        };
    }

    takePicture() {
        this.camera.capture()
        .then(blob => {
            console.log(blob)
            this.img = this.refs.CameraImg;
            this.state.dataCapture = 'Captured'
            this.setState({dataCapture: "lol"});
            this.forceUpdate();
            console.log(this.state.dataCapture)
            this.img.src = URL.createObjectURL(blob);
            this.img.onload = () => { URL.revokeObjectURL(this.src); }
        })

    }

    render() {
        if (this.state.dataCapture === null) {
            return (
                <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <div style={style.container}>
                <Camera
                style={style.preview}
                ref={(cam) => {
                    this.camera = cam;
                }}
                >
                <div style={style.captureContainer} onClick={this.takePicture}>
                <div style={style.captureButton} />
                </div>
                </Camera>
                <img src={this.img} ref="CameraImg"/>
                </div>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
                </header>
                </div>
            );
        } else {
            console.log("return!")
            return (
            <div>
                Hello
            </div>
            )
        }
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
