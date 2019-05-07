/* eslint-disable react/prefer-es6-class */
/**
 * Copyright (c) 2017-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import React from '../../node_modules/react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import {
    ViroARScene,
    ViroARImageMarker,
    Viro3DObject,
    ViroAmbientLight,
    Viro360Video,
    ViroBox,
    ViroNode,
    Viro360Image,
    ViroPortal,
    ViroPortalScene,
    ViroARTrackingTargets,
} from '../../node_modules/react-viro';

let createReactClass = require('../../node_modules/create-react-class');

let ARPosterDemo = createReactClass({
    render() {
        return (

                    <ViroPortalScene
                        position={[0, -1, 0]}
                        passable={true}
                    >

                        <ViroPortal position={[0, 0, -1]} scale={[0.25, 0.25, 0.25]}>
                            <Viro3DObject
                            source={require('./portal_res/portal_ship/portal_ship.vrx')}
                            resources={[
                                require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                                require('./portal_res/portal_ship/portal_ship_normal.png'),
                                require('./portal_res/portal_ship/portal_ship_specular.png'),
                            ]}
                            type="VRX"
                        />
                        </ViroPortal>
                        <Viro360Image
                            source={require('./portal_res/360_island.jpg')}
                        />
                    </ViroPortalScene>


        );
    },
});


module.exports = ARPosterDemo;
