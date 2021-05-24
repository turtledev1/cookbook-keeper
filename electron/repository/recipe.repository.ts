import { v4 } from 'uuid';
import { RecipeDTO } from '../../src/model/dto/recipeDTO';
import { getUserDataPath } from '../app';
import { createDirectory, isPathExist, readFile, writeFile } from '../file-manager';

const DATA_FOLDER = `${getUserDataPath()}/data`;
const RECIPES_FILE = `${DATA_FOLDER}/recipes.json`;

export function loadRecipes(): RecipeDTO[] {
    createFileIfNotExist();
    const recipesString = readFile(RECIPES_FILE);

    return JSON.parse(recipesString);
}

export function saveRecipe(recipe: RecipeDTO): void {
    const recipes = loadRecipes();
    recipes.push(recipe);
    writeFile(RECIPES_FILE, JSON.stringify(recipes));
}

function createFileIfNotExist(): void {
    if (!isPathExist(DATA_FOLDER)) {
        createDirectory(DATA_FOLDER);
    }
    if (!isPathExist(RECIPES_FILE)) {
        writeFile(RECIPES_FILE, JSON.stringify([
            {
                "id": v4(),
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
                ],
                "createdTime": 1621178230679
            },
            {
                "id": v4(),
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
                ],
                "createdTime": 1621178230500
            }
        ]));
    }
}
