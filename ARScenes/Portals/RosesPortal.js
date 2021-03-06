import React, { Component } from "../../node_modules/react";
import { StyleSheet } from "react-native";
import {
  Viro3DObject,
  ViroSound,
  ViroNode,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  ViroText,
  ViroMaterials
} from "react-viro";
import HeartObject from "./HeartObject";
import DeadEndforRosePortal from "./DeadEndforRosePortal";
import { connect } from "react-redux";

export class RosePortal extends Component {
  constructor() {
    super();
    this.state = {
      playPortal1Sound: true,
      playPortal2Sound: true,
      showPasscode: false,
      isLoading: true
    };

    this.handleEnterPortal1 = this.handleEnterPortal1.bind(this);
    this.handleExitPortal1 = this.handleExitPortal1.bind(this);
    this.handleEnterPortal2 = this.handleEnterPortal2.bind(this);
    this.handleExitPortal2 = this.handleExitPortal2.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleEnterPortal1() {
    this.setState({ playPortal1Sound: false });
  }

  handleExitPortal1() {
    this.setState({ playPortal1Sound: true });
  }

  handleEnterPortal2() {
    this.setState({ playPortal2Sound: false });
  }

  handleExitPortal2() {
    this.setState({ playPortal2Sound: true });
  }

  handleClick() {
    this.setState({ showPasscode: true });
  }
  render() {
    const passcode = this.props.passcode;
    return (
      <ViroPortalScene
        // position={[0, 0, 0]}
        passable={true}
        onPortalEnter={this.handleEnterPortal1}
        onPortalExit={this.handleExitPortal1}
      >
        <ViroPortal position={[0, 0, -1]} scale={[0.15, 0.15, 0.15]}>
          <Viro3DObject
            source={require("../../assets/portal_assets/portal_res/portal_wood_frame/portal_wood_frame.vrx")}
            resources={[
              require("../../assets/portal_assets/portal_res/portal_wood_frame/portal_wood_frame_diffuse.png"),
              require("../../assets/portal_assets/portal_res/portal_wood_frame/portal_wood_frame_normal.png"),
              require("../../assets/portal_assets/portal_res/portal_wood_frame/portal_wood_frame_specular.png")
            ]}
            type="VRX"
          />
        </ViroPortal>
        <Viro360Image
          source={require("../../assets/portal_assets/360roses.jpg")}
        />

        <HeartObject position={[1, 1, -3]} />
        <HeartObject position={[0, 2, -5]} />

        <ViroSound
          paused={this.state.playPortal1Sound}
          muted={false}
          source={require("../../assets/music/arcadiatrimmed.wav")}
          loop={true}
          volume={1.0}
        />
        <DeadEndforRosePortal />

        <ViroPortalScene
          // position={[1, 0, -1]}
          passable={true}
          onPortalEnter={this.handleEnterPortal2}
          onPortalExit={this.handleExitPortal2}
        >
          <ViroPortal position={[1, 0, -1]} scale={[0.15, 0.15, 0.15]}>
            <Viro3DObject
              source={require("../../assets/portal_assets/portal_res/portal_archway/portal_archway.vrx")}
              resources={[
                require("../../assets/portal_assets/portal_res/portal_archway/portal_archway_diffuse.png"),
                require("../../assets/portal_assets/portal_res/portal_archway/portal_archway_normal.png"),
                require("../../assets/portal_assets/portal_res/portal_archway/portal_archway_specular.png"),
                require("../../assets/portal_assets/portal_res/portal_archway/portal_entry.png")
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Image
            source={require("../../assets/portal_assets/tree360.jpg")}
            // onLoadEnd={ this.props.onLoadEnd}
          />
          <ViroNode position={[1, 1, -1]}>
            {/* 3D Text vertion for passcode */}
            <ViroText
              style={styles.boldFont}
              position={[0, 0.1, -0.1]}
              // width={2}
              height={3}
              extrusionDepth={3}
              materials={["frontMaterial", "backMaterial", "sideMaterial"]}
              text={`The second number of the passcode: ${passcode[1]}`}
              visible={this.state.showPasscode}
            />

            <Viro3DObject
              source={require("../../assets/emoji_heart/emoji_heart.vrx")}
              resources={[
                require("../../assets/emoji_heart/emoji_heart_specular.png"),
                require("../../assets/emoji_heart/emoji_heart.png")
              ]}
              position={[0, 0, -0.2]}
              scale={[0.3, 0.3, 0.3]}
              onClick={this.handleClick}
              type="VRX"
            />
          </ViroNode>
          <HeartObject position={[1, 1, -3]} />
          <HeartObject position={[0, 2, -5]} />

          <ViroSound
            paused={this.state.playPortal2Sound}
            muted={false}
            source={require("../../assets/music/monkeys-spinning-monkeys-trimmed.wav")}
            loop={true}
            volume={1.0}
          />
        </ViroPortalScene>
      </ViroPortalScene>
    );
  }
}

ViroMaterials.createMaterials({
  frontMaterial: {
    diffuseColor: "#FFFFFF"
  },
  backMaterial: {
    diffuseColor: "#C9F299"
  },
  sideMaterial: {
    diffuseColor: "#88BB92"
  }
});

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 20,
    color: "#C8243B",
    textAlignVertical: "center",
    textAlign: "center"
  },
  boldFont: {
    color: "#FFFFFF",
    flex: 1,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16
  }
});

ViroMaterials.createMaterials({
  frontMaterial: {
    diffuseColor: "#FFFFFF"
  },
  backMaterial: {
    diffuseColor: "#C9F299"
  },
  sideMaterial: {
    diffuseColor: "#88BB92"
  }
});

const mapState = state => {
  return {
    passcode: state.game.passcode
  };
};

export default connect(
  mapState,
  null
)(RosePortal);

// module.exports = RosePortal;
