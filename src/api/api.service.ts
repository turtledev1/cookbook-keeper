import { IpcRequest } from '../model/ipc/ipc-request';

const { ipcRenderer } = window.require("electron");

class ApiService {
    public send<T>(channel: string, request: IpcRequest = {}): Promise<T> {
        // If the ipcRenderer is not available try to initialize it
        if (!ipcRenderer) {
            throw new Error(`Unable to require renderer process`);
        }
        // If there's no responseChannel let's auto-generate it
        if (!request.responseChannel) {
            request.responseChannel = `${channel}_response_${new Date().getTime()}`
        }

        console.log(channel, request);
        ipcRenderer.send(channel, request);

        return new Promise(resolve => {
            ipcRenderer.once(request.responseChannel!, (event, response) => resolve(response));
        });
    }
}

export const api = new ApiService();
