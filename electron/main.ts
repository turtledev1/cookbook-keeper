import { app, BrowserWindow, ipcMain } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from "electron-devtools-installer";
import * as isDev from 'electron-is-dev';
import { IpcChannel } from '../src/shared/model/ipc/ipc-channel';
import { LoadRecipesChannel } from './ipc/load-recipes.channel';

class Main {
    private mainWindow: BrowserWindow | null = null;

    public init(ipcChannels: IpcChannel[]) {
        app.on('ready', this.createWindow);
        app.on('window-all-closed', this.onWindowAllClosed);
        app.on('activate', this.onActivate);

        this.registerIpcChannels(ipcChannels);
    }

    private onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    }

    private onActivate() {
        if (!this.mainWindow) {
            this.createWindow();
        }
    }

    private createWindow() {
        this.mainWindow = new BrowserWindow({
            width: 1280,
            height: 720,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                devTools: isDev,
            }
        })

        if (isDev) {
            // DevTools
            installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS])
                .then((name) => console.log(`Added Extension:  ${name}`))
                .catch((err) => console.log('An error occurred: ', err));

            this.mainWindow.loadURL('http://localhost:3000/index.html');
        } else {
            // 'build/index.html'
            this.mainWindow.setMenu(null);
            this.mainWindow.loadURL(`file://${__dirname}/../index.html`);
        }

        this.mainWindow.on('closed', () => {
            this.mainWindow = null;
        });
    }

    private registerIpcChannels(ipcChannels: IpcChannel[]) {
        ipcChannels.forEach(channel => ipcMain.on(channel.getName(), (event, request) => channel.handle(event, request)));
    }
}

(new Main()).init([
    new LoadRecipesChannel(),
]);
