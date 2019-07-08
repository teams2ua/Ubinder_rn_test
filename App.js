/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules} from 'react-native';
import lib_core_logic from './create_sync_balance.js';
import UbinderOnPromises from './UbinderOnPromises.js';
import RawRNUbinder from './RawRNUbinder.js';
import axios from "axios";
import { thisExpression } from '@babel/types';

const services = require('./messages/services_pb.js')

export default class App extends Component {

  constructor(props) {
    super(props);
    this.RawRNUbinder = new RawRNUbinder();
    this.ubinder = new UbinderOnPromises.UbinderOnPromises(this.RawRNUbinder, this.OnNotification, this.OnRequest);
    this.DoTheJob();
    this.state={
      logg:""
    }
  }

  updateLog= (x) => {
    this.setState({logg:this.state.logg + x + '\n\r'})
  }

  DoTheJob(){
    lib_core_logic.run_test_logic(this.ubinder, this.updateLog, "/data/data/com.test/files");
  };

  OnRequest(data, callback) {
    var serviceReq = services.ServiceRequest.deserializeBinary(data);
    if (serviceReq.getType() == services.ServiceRequestType.HTTP_REQ) {
        var httpReq = services.HttpRequest.deserializeBinary(serviceReq.getRequestBody());
        const method = httpReq.getMethod();
        const headersMap = httpReq.getHeadersMap();
        let dataStr = httpReq.getBody();
        const headers = {};
        headersMap.forEach((v, k) => {
            headers[k] = v;
        });
        let res;
        const param = {
            method,
            headers
        };
        param.url = httpReq.getUrl();
        if (dataStr != "") {
            param.data = dataStr;
        }
        console.log(param);
        axios(param)
          .then((resp) => {
              var serviceResp = new services.ServiceResponse();
              var respMessage = new services.HttpResponse();
              respMessage.setCode(resp.status);
              respMessage.setBody(JSON.stringify(resp.data));
              serviceResp.setResponseBody(respMessage.serializeBinary());
              callback(serviceResp.serializeBinary());
              })
          .catch((err) => {
              console.log(err);
              var serviceResp = new services.ServiceResponse();
              serviceResp.setError(err.message);
              callback(serviceResp.serializeBinary());
          });
    }
  }

  OnNotification(data) {
    console.log("I am inside component OnNotification");
  }

  render() {
    return (
      <Text>{this.state.logg}</Text>
    );
  }


  componentWillUnmount() {
    this.RawRNUbinder.unmount();
  }

}