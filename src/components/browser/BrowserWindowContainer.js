import React, {Component} from 'react';
import Iframe from 'react-iframe'
 
 
class BrowserWindowContainer extends Component {
 
  render() {
     return (
       <div id="BrowserWindow">    
<Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </div>  
        )
    }
 
}
export default BrowserWindowContainer;
