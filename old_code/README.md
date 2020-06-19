# electron-tabs
Minimal application demonstrating how to create tabs in Electron.

Install dependencies:

```
yarn
```

Run demo:

```
yarn run start
```

Check out source code for details.

Read accompanied article here: http://electron.rocks/implementing-tabs-in-electron/
"cross-env BROWSER=none yarn react-start"
 

```
  },
  "scripts": {
    "react-start": "react-scripts start",
    "react-build": "react-scripts build",
    "react-test": "react-scripts test --env=jsdom",
    "react-eject": "react-scripts eject",
    "electron-build": "electron-builder",
    "prepare": "yarn run clean && yarn build && yarn run download:plugins",
    "release": "yarn react-build && electron-builder --publish=always",
    "build": "yarn react-build && yarn electron-build && theia build --mode development",
    "clean": "theia clean",
    "start": "concurrently \"cross-env BROWSER=none yarn react-start\"  \"theia start --plugins=local-dir:plugins\"  \"wait-on http://localhost:3000 && electron .\"",
    "download:plugins": "theia download:plugins"
  },

```
