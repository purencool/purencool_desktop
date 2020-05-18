
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'


/**
 *
 */
/*
function pnc() {
  console.log('Function is part of "app" so globally accessible...');
  return true
}
pnc();
*/

/**
 *  docker run -it --publish=80:80  purencool/webservices:v1.0.3.2020 /bin/bash
 *
 *
 * /
 /**
function webservices(){

}
*/

/**

 *

 */
/**
function createIssue(){

}
*/

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

// Now we can render our application into it
render(<App />, document.getElementById('root'))
