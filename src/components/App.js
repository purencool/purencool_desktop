
import '../assets/css/App.css'
import React, { Component } from 'react'
import { remote } from 'electron';


import HeaderNav from './parts/HeaderNav'
import SideBar from './parts/SideBar'
import IssueCreation from "./forms/IssueCreation"
import Ide from "./ide/Ide"
import Website from "./website/Website"
import GlobalSettings from "./popups/GlobalSettings"

const app = remote.app;
class App extends Component {
  render() {
    return (
      <div id="Layout" className="">
        <div className="col-1 no-porm">
             <SideBar />
        </div>
        <div className="col-11 no-porm">
          <HeaderNav />
           <div id="MainWindow" className="">
             <div id="MainWorkSpace" className="">
               <Website />
             </div>
           </div>  
         </div>
         <GlobalSettings />
         <Ide />
         <IssueCreation />
      </div>
    );
  }
}

export default App
