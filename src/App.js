import React, { Component } from 'react';
import Camera from 'react-camera';
import TagsInput from 'react-tagsinput'
import logo from './logo.svg';
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.
import './App.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
 } from 'react-accessible-accordion';
 import 'react-accessible-accordion/dist/fancy-example.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';

const Handle = Slider.Handle;

const rectangleStyle = {
	width: '800px',
	height: '50px',
	background: 'blue'
};


export default class App extends Component {

    constructor(props) {
        super(props);
        this.takePicture = this.takePicture.bind(this);
        this.state = {
            dataCapture: null,
            tags: []
        };
        this.handleChange = this.handleChange.bind(this)
        this.goHome = this.goHome.bind(this)

    }

    takePicture() {
        this.camera.capture()
        .then(blob => {
            console.log(blob)
            this.img = this.refs.CameraImg;
            this.setState({dataCapture: "lol"});
            console.log(this.state.dataCapture)
            this.img.src = URL.createObjectURL(blob);
            this.img.onload = () => { URL.revokeObjectURL(this.src); }
        })

    }

    handleChange(tagsIn) {
        // API Get
        console.log(tagsIn);
        this.setState({tags: tagsIn});
    }

    goHome() {
      this.setState({dataCapture: null});
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
                <div id="rectangle" style={rectangleStyle}></div>
                <TagsInput value={this.state.tags} onChange={this.handleChange} />
                <div>
                <Accordion>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>Tags</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p>What Names</p>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>Calories</h3>
                            <div>Understand!</div>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p>Body content</p>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>
                </div>
                <div>
                  <button onClick={() => this.goHome()}>
                    Go Home
                  </button>
                </div>
                <div>
                  <div className='rowC' style={{display:"flex", flexDirection:"row"}}>
                  Vegetables {" "} <Slider min={0} max={100} defaultValue={0} handle={handle} />
                  </div>
                  <div className='rowC' style={{display:"flex", flexDirection:"row"}}>
                  Proteins {" "} <Slider min={0} max={100} defaultValue={0} handle={handle} />
                  </div>
                  <div className='rowC' style={{display:"flex", flexDirection:"row"}}>
                  Grains {" "} <Slider min={0} max={100} defaultValue={0} handle={handle} />
                  </div>
                </div>
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

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};
