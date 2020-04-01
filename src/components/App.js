
import '../assets/css/App.css'
import React, { Component } from 'react'
import { remote } from 'electron';
import Shell from 'shelljs';

import HeaderNav from './parts/HeaderNav'
import SideBar from './parts/SideBar'
import IssueCreation from "./forms/IssueCreation"
import BrowserWindowContainer from "./browser/BrowserWindowContainer"

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
      <div id="Layout" className="">
        <div className="col-1 no-porm">
             <SideBar/>
        </div>
        <div className="col-11 no-porm">
             <HeaderNav/>
           <div id="MainWindow" className="">
             <div id="MainWorkSpace" className="">
               Main window
               <BrowserWindowContainer />
             </div>
             <div id="Tools" className="">
               <IssueCreation/>
             </div>
           </div>  
         </div>
      </div>
    );
  }
}

export default App
