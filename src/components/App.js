
import '../assets/css/App.css'
import React, { Component } from 'react'
import { remote } from 'electron';
import Shell from 'shelljs';

import HeaderNav from './parts/HeaderNav'
import SideBar from './parts/SideBar'

const app = remote.app;
class App extends Component {
  render() {
    if (!Shell.which('docker')) {
      Shell.echo('Sorry, this needs docker');
      console.log('Sorry, this needs docker');
    }  else {
        Shell.echo('We have docker');
      console.log('We have docker')
    }

    if (!Shell.which('git')) {
      Shell.echo('Sorry, this needs git');
      console.log('Sorry, this needs git');
    }  else {
        Shell.echo('We have git');
      console.log('We have git')
    }

    if (!Shell.which('composer')) {
      Shell.echo('Sorry, this needs composer');
      console.log('Sorry, this needs composer');
    }  else {
        Shell.echo('We have composer');
      console.log('We have composer')
    }



    return (
      <div id="Layout">
      
         <div Class="row">
         <HeaderNav/>
         </div>
         <div Class="row">
         <div id="SideBar" Class="col-2">
         <SideBar/>
         </div>
         <div id="MainWidow" Class="col-10">
            Main window
         </div>
         </div>
      </div>
    );
  }
}

export default App
