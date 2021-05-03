import { RecipeDTO } from '../shared/model/dto/recipeDTO';
import { Channel, ChannelResponse } from '../shared/model/ipc/channels';
import { IpcRequest } from '../shared/model/ipc/ipc-request';

const { ipcRenderer } = window.require("electron");

class ApiService {
    public send<T>(channel: Channel): Promise<T> {
        // If the ipcRenderer is not available try to initialize it
        if (!ipcRenderer) {
            throw new Error(`Unable to require renderer process`);
        }
        const responseChannel = ChannelResponse[channel];
        const request: IpcRequest = {
            responseChannel,
        };
        ipcRenderer.send(channel, request);

        return new Promise(resolve => {
            ipcRenderer.once(responseChannel, (event, response) => resolve(response));
        });
    }

    public loadRecipes(): Promise<{ recipes: RecipeDTO[] }> {
        return api.send<{ recipes: RecipeDTO[] }>(Channel.LoadRecipes)
    }
}

export const api = new ApiService();
