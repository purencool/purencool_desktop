const TabGroup = require('electron-tabs');

let tabGroup = new TabGroup({});

let sites = tabGroup.addTab({
    title: 'Sites',
    src: './src/sites/sites.html',
    webviewAttributes: {
        'nodeintegration': true
    },
    icon: 'fa fa-home',
    visible: true,
    closable: false,
    active: true
});

let browser = tabGroup.addTab({
    title: 'Browser',
    src: './src/browser/browser.html',
    webviewAttributes: {
        'nodeintegration': true
    },
    icon: 'fa fa-home',
    visible: true,
    closable: false,
    active: true
});

let ide = tabGroup.addTab({
    title: 'Ide',
    src: './src/ide/ide.html',
    webviewAttributes: {
        'nodeintegration': true
    },
    icon: 'fa fa-home',
    visible: true,
    closable: false,
    active: true
});


