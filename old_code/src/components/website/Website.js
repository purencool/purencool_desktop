import React, {Component} from 'react';
import Iframe from 'react-iframe'
 
 
class Website extends Component {
 
  render() {
     return (
       <div id="Website" >    
<Iframe url="http://localhost:8080"
        width="100%"
        height="450px"
        id="Website-frame"
        className="website"
        display="initial"
        position="relative"/>
        </div>  
        )
    }
 
}
export default Website;
