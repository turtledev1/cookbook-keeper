import { IpcMainEvent } from 'electron';
import { Channel } from '../../src/model/ipc/channels';
import { IpcChannel } from '../../src/model/ipc/ipc-channel';
import { IpcRequest } from '../../src/model/ipc/ipc-request';
import { loadRecipes } from '../repository/recipe.repository';

export class LoadRecipesChannel implements IpcChannel {
    getName(): Channel {
        return Channel.LoadRecipes;
    }

    handle(event: IpcMainEvent, request: IpcRequest): void {
        event.sender.send(request.responseChannel, { recipes: loadRecipes() });
    }
}