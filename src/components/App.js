
import '../assets/css/App.css'
import React, { Component } from 'react'
import { remote } from 'electron';

//import HeaderNav from './parts/HeaderNav'
//import SideBar from './parts/SideBar'
//import IssueCreation from "./forms/IssueCreation"
//import Ide from "./ide/Ide"
//import Website from "./website/Website"
//import GlobalSettings from "./popups/GlobalSettings"

const app = remote.app;
class App extends Component {
  render() {
    console.log('testingto see if it works');
    return (
      <div id="Layout" className="">
        <div className="col-1 no-porm">
        </div>
        <div className="col-11 no-porm">
           <div id="MainWindow" className="">
             <div id="MainWorkSpace" className="">
             </div>
           </div>
         </div>
      </div>
    );
  }
}

export default App
