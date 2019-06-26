/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules, RCTUbinder} from 'react-native';
import { DeviceEventEmitter } from 'react-native';
import {GetVersionResponse, CoreRequestType, CoreRequest} from './messages/commands_pb.js'


export default class App extends Component {

  DoTheJob() {
    var x = this.createGetVersionRequest();
    console.log(x);
    var l = NativeModules.Ubinder.SendRequest("12323", "321412");
    console.log(l);
  }

  constructor(props) {
    super(props);
    console.log(NativeModules);
    console.log(NativeModules.Ubinder);
    this.DoTheJob();
  }

  render() {
    return (
      <Text>"Read console"</Text>
    );
  }

  createGetVersionRequest() {
    var req = new CoreRequest();
    req.setRequestType(CoreRequestType.GET_VERSION);
    return req;
  }
    


  componentDidMount() {
    this.onRequestSub = DeviceEventEmitter.addListener('onRequest', function(e: Event) {
        console.log("OnRequest");
        console.log(e);
    });

    this.onResponseSub = DeviceEventEmitter.addListener('onResponse', function(e: Event) {
        console.log("OnResponse");
        console.log(e);
    });

    this.onNotificationSub = DeviceEventEmitter.addListener('onNotification', function(e: Event) {
        console.log("OnNotification");
        console.log(e);
    });

  }

  componentWillUnmount() {
    this.onRequestSub.remove();
    this.onResponseSub.remove();
    this.onNotificationSub.remove();
  }

}