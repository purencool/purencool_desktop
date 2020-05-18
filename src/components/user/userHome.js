/**
 * setup userHome
 */
function userHome() {
  let plateform = os.platform;
  let userPath = '';
  if(plateform === 'win32'){
    userPath = process.env.USERPROFILE;
  } else {
    userPath = process.env.HOME;
  }

  let userPathDirectory = userPath+'/purencool_studio';
  if (fs.existsSync(userPathDirectory)) {
    console.log('user path exists');
    console.log(userPathDirectory);

  } else {
    console.log('user path does exists');
    console.log(userPathDirectory);
    fs.mkdirSync(userPathDirectory);
  }

}
