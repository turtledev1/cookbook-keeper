import { IpcMainEvent } from 'electron';
import { Channel } from '../../src/model/ipc/channels';
import { IpcChannel } from '../../src/model/ipc/ipc-channel';
import { IpcRequest } from '../../src/model/ipc/ipc-request';
import { getUserDataPath } from '../app';
import { createDirectory, isPathExist, readFile, writeFile } from '../file-manager';

const DATA_FOLDER = `${getUserDataPath()}/data`;
const RECIPES_FILE = `${DATA_FOLDER}/recipes.json`;

export class LoadRecipesChannel implements IpcChannel {
    getName(): Channel {
        return Channel.LoadRecipes;
    }

    handle(event: IpcMainEvent, request: IpcRequest): void {
        if (!isPathExist(DATA_FOLDER)) {
            createDirectory(DATA_FOLDER);
        }
        if (!isPathExist(RECIPES_FILE)) {
            writeFile(RECIPES_FILE, JSON.stringify([
                {
                    "title": "Première recette",
                    "ingredients": ["1/2 tasse de truc", "Lots of other things"],
                    "steps": ["Coupe toute", "Cuit toute"],
                    "portions": 6,
                    "prepTime": 0.5,
                    "cookTime": 1,
                    "labels": [
                        {
                            "text": "végé",
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "title": "Deuxième recette",
                    "ingredients": ["1/2 tasse de truc", "Lots of other things"],
                    "steps": ["Coupe toute", "Cuit toute"],
                    "portions": 6,
                    "prepTime": 0.5,
                    "cookTime": 1,
                    "labels": [
                        {
                            "text": "végé",
                            "color": "#000000"
                        }
                    ]
                }
            ]));
        }
        const recipes = readFile(RECIPES_FILE);
        event.sender.send(request.responseChannel, { recipes: JSON.parse(recipes) });
    }
}