import { RecipeDTO } from '../model/dto/recipeDTO';
import { Channel, ChannelResponse } from '../model/ipc/channels';
import { IpcRequest } from '../model/ipc/ipc-request';

const { ipcRenderer } = window.require("electron");

class ApiService {
    public loadRecipes(): Promise<{ recipes: RecipeDTO[] }> {
        return api.send<{ recipes: RecipeDTO[] }>(Channel.LoadRecipes)
    }

    private send<T>(channel: Channel): Promise<T> {
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
}

export const api = new ApiService();
