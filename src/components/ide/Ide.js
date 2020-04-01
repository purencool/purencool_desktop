import React, {Component} from 'react';
import Iframe from 'react-iframe'
 
 
class Ide extends Component {
  render() {
     return (
       <div id="Ide" className="full-screen bg-color display-none" >  
        <a href="#" className="close close-ide"><span>Close Ide</span></a>  
         <Iframe url="http://localhost:3000"
             width="100%"
             height="97%"
             id="IdeFrame"
             className="ide"
             display="initial"
             position="relative"/>
        </div>  
        )
    }
}
export default Ide;
