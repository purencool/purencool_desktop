/**
 *
 * @type {module:http}
 */

/**
 * System dependancy
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

/**
 * Global variables
 */
const rootPath = './www/';
const port = 3000;
const host = 'localhost';
const extensions = {
  ".html" : '{"Content-Type":"text/html"}',
  ".css" : '{"Content-Type":"text/css"}',
  ".js" : '{"Content-Type":"application/javascript"}',
  ".json" : '{"Content-Type":"application/json"}',
  ".png" : '{"Content-Type":"image/png"}',
  ".gif" : '{"Content-Type":"image/gif"}',
  ".jpg" : '{"Content-Type":"image/jpeg"}',

};



/**
 * server
 */
http.createServer(function(req, res){

  /**
   *
   * @param url
   * @param options
   * @returns {ReadStream}
   */
  function setFileStream(url, options){
    if(options === ''){
      return fs.createReadStream(path.join(__dirname, rootPath , url));
    }
    return fs.createReadStream(path.join(__dirname, rootPath , url), options);
  }


  /**
   * 404 response
   */
  function set404(){
    res.writeHead(404, extensions['.html']);
    res.end("No Page Found");
  }

  if(req.url === "/"){
    fs.readFile(rootPath +"index.html", "UTF-8", function(err, html){
      res.writeHead(200, extensions['.html'] );
      res.end(html);
    });
  }else if(req.url.match("\.css$")){
    setFileStream(req.url,"UTF-8").pipe(res.writeHead(200, extensions['.css']));

  }else if(req.url.match("\.js$")){
    setFileStream(req.url,"UTF-8").pipe(res.writeHead(200, extensions['.js']));

  }else if(req.url.match("\.json$")){
    setFileStream(req.url,"UTF-8").pipe(res.writeHead(200, extensions['.json']));

  }else if(req.url.match("\.png$")){
    setFileStream(req.url).pipe(res.writeHead(200, extensions['.png']));

  }else{
    set404()
  }

}).listen(port,host);
console.log('http://'+host+':'+port);
