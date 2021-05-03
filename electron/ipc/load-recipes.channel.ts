import { IpcMainEvent } from 'electron';
import { Channel } from '../../src/shared/model/ipc/channels';
import { IpcChannel } from '../../src/shared/model/ipc/ipc-channel';
import { IpcRequest } from '../../src/shared/model/ipc/ipc-request';
import { getUserDataPath } from '../app';
import { isFileExist, readFile, writeFile } from '../file-manager';

const RECIPES_FILE = `${getUserDataPath()}/recipes.json`;

export class LoadRecipesChannel implements IpcChannel {
    getName(): Channel {
        return Channel.LoadRecipes;
    }

    handle(event: IpcMainEvent, request: IpcRequest): void {
        if (!isFileExist(RECIPES_FILE)) {
            writeFile(RECIPES_FILE, JSON.stringify([{
                "title": "Première recette",
                "ingredients": ["1/2 tasse de truc", "Lots of other things"],
                "steps": ["Coupe toute", "Cuit toute"],
                "prepTime": 0.5,
                "cookTime": 1,
                "labels": [
                    {
                        "text": "végé",
                        "color": "#000000"
                    }
                ]
            }]));
        }
        const recipes = readFile(RECIPES_FILE);
        event.sender.send(request.responseChannel, { recipes: JSON.parse(recipes) });
    }
}