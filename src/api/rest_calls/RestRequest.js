import React from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import Config from '../../config';

class RestRequest {
  static requestSupport(formData){
    return formData;
  }

  static getData(formData) {
    console.log(Config.default);
    return this.requestSupport(formData);
  }
}

export default RestRequest;

