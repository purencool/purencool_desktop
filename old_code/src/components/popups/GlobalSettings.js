import React, { Component } from 'react'
import Shell from 'shelljs';

/**
 * Global settings needed for application to work
 */
class GlobalSettings extends Component {
 
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
          <div id="GlobalSettings" className="display-none">
              <div className="full-screen bg-color">
              Global Settings
              </div>
          </div>
        );
      }
}

export default GlobalSettings;