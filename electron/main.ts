import { app, BrowserWindow } from 'electron';
import * as isDev from 'electron-is-dev';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from "electron-devtools-installer";

let win: BrowserWindow | null = null;

function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: true
        }
    })

    if (isDev) {
        // DevTools
        installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS])
            .then((name) => console.log(`Added Extension:  ${name}`))
            .catch((err) => console.log('An error occurred: ', err));

        win.loadURL('http://localhost:3000/index.html');
    } else {
        // 'build/index.html'
        win.loadURL(`file://${__dirname}/../index.html`);
    }

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
