"use strict";

import React, { Component } from "../../node_modules/react";

import { StyleSheet } from "react-native";

import {
  ViroSceneNavigator,
  ViroScene,
  ViroARScene,
  ViroAmbientLight,
  ViroSpinner,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroText,
<<<<<<< HEAD
  ViroImage,
  ViroVideo,
} from '../../node_modules/react-viro';
=======
  ViroImage
} from "../../node_modules/react-viro";
>>>>>>> f0b042f8b433b97955aefe2ae68ade3ebc415bce

import { PortalScene2 } from "./AcePortalScene2";
// import PasswordScreen from '../PasswordScreen'

import HeartObject from "./HeartObject";
import RoseObject from "./RoseObject";

let count = 0;
const shipPortal =
  "../../assets/portal_assets/portal_res/portal_ship/portal_ship.vrx";

const portalShipDiffuse =
  "../../assets/portal_assets/portal_res/portal_ship/portal_ship_diffuse.png";

const portalShipNormal =
  "../../assets/portal_assets/portal_res/portal_ship/portal_ship_normal.png";

const portalShipSpecular =
  "../../assets/portal_assets/portal_res/portal_ship/portal_ship_specular.png";

class PortScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      portalText: 'Down the rabbit hole...',
=======
      portalText: "Hello There!",
>>>>>>> f0b042f8b433b97955aefe2ae68ade3ebc415bce
      clickCount: `click count ${count}`,
      heart1: true
    };
    this._onEnterPortal = this._onEnterPortal.bind(this);
    this._jumpNextScene = this._jumpNextScene.bind(this);
    // this._handleClick = this._handleClick.bind(this);
  }

  _onEnterPortal() {
    this.setState({
<<<<<<< HEAD
      portalText: 'Down the rabbit hole...',
=======
      portalText: "Find the key!"
>>>>>>> f0b042f8b433b97955aefe2ae68ade3ebc415bce
    });
  }

  //jump to second scene
  _jumpNextScene() {
    this.props.arSceneNavigator.jump("scene2", { scene: PortalScene2 });
  }

  render() {
    return (
      <ViroPortalScene
        position={[0, 1, -1]}
        passable={true}
        onPortalEnter={() => {
          this._onEnterPortal();
        }}
      >
        <ViroPortal position={[0, 0, -1]} scale={[0.5, 0.5, 0.5]}>
          <Viro3DObject
            source={require(shipPortal)}
            resources={[
              require(portalShipDiffuse),
              require(portalShipNormal),
              require(portalShipSpecular),
            ]}
            type="VRX"
          />
        </ViroPortal>
        <Viro360Video
          source={require('../../assets/portal_assets/2ndtrip.mp4')}
          loop={true}
          paused={false}
          volume={1.0}
        />

        <ViroPortalScene
          passable={true}
          onPortalEnter={() => {
            this._onEnterPortal();
          }}
        >
          <ViroPortal position={[-2, 0, -5]} scale={[0.3, 0.3, 0.3]}>
            <Viro3DObject
              source={require(shipPortal)}
              resources={[
                require(portalShipDiffuse),
                require(portalShipNormal),
                require(portalShipSpecular)
              ]}
              type="VRX"
            />
          </ViroPortal>
<<<<<<< HEAD
          <Viro360Image
            source={require('../../assets/portal_assets/360_space.jpg')}
=======
          <Viro360Video
            source={require("../../assets/portal_assets/trippy360_480p.mp4")}
            loop={true}
            paused={false}
            volume={1.0}
>>>>>>> f0b042f8b433b97955aefe2ae68ade3ebc415bce
          />
        </ViroPortalScene>
        <ViroPortalScene
          passable={true}
          // dragType="FixedDistance"
          // onDrag={() => {}}
          onPortalEnter={() => {
            this._onEnterPortal();
          }}
        >
          <ViroPortal position={[2, 0, -5]} scale={[0.3, 0.3, 0.3]}>
            <Viro3DObject
              source={require(shipPortal)}
              resources={[
                require(portalShipDiffuse),
                require(portalShipNormal),
                require(portalShipSpecular),
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Image
            source={require('../../assets/portal_assets/360_tiles.jpg')}
          />
<<<<<<< HEAD
=======
          {/* <ViroImage
            source={require('../res/signExit.png')}
            position={[1, 1, -3]}
            scale={[0.1, 0.1, 0.1]}
            onClick={this._handleClick}
          /> */}
          <HeartObject position={[1, 1, -1]} />
          <HeartObject position={[1, 1.5, -2]} />
          <HeartObject position={[-1, 1, -1]} />
          <RoseObject position={[2, 1, -5]} scale={[0.05, 0.05, 0.05]} />
>>>>>>> f0b042f8b433b97955aefe2ae68ade3ebc415bce
        </ViroPortalScene>

        <ViroImage
          source={require('../../assets/res/Clickme.jpg')}
          position={[2, 2, -4]}
          scale={[0.3, 0.3, 0.3]}
          onClick={this._jumpNextScene}
        />

        <ViroText
          text={this.state.portalText}
          width={2}
          height={2}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0.4, -3]}
          style={styles.portalTextStyles}
        />
        <ViroImage
          source={require('../../assets/res/signExit.png')}
          position={[1, 1, -3]}
          scale={[0.1, 0.1, 0.1]}
          onClick={this._handleClick}
        />

        <ViroText
          text={this.state.portalText}
          width={2}
          height={2}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0.4, -3]}
          outerStroke={{ type: 'Outline', width: 2, color: '#000000' }}
          style={styles.portalTextStyles}
        />

        <HeartObject position={[1, 1, -1]} />
        <HeartObject position={[1, 1.5, -2]} />
        <HeartObject position={[-1, 1, -1]} />
      </ViroPortalScene>
    );
  }
}

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 20,
<<<<<<< HEAD
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
=======
    color: "#C8243B",
    textAlignVertical: "center",
    textAlign: "center"
>>>>>>> f0b042f8b433b97955aefe2ae68ade3ebc415bce
  },
  portalTextStyles: {
    fontFamily: "Arial",
    fontSize: 28,
<<<<<<< HEAD
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
=======
    color: "#C8243B",
    textAlignVertical: "center",
    textAlign: "center"
  }
>>>>>>> f0b042f8b433b97955aefe2ae68ade3ebc415bce
});

module.exports = PortScene;
