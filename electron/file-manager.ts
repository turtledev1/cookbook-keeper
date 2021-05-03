import { existsSync, readFileSync, writeFileSync } from 'fs';

export function isFileExist(path: string): boolean {
    return existsSync(path);
}

export function readFile(path: string): string {
    return readFileSync(path, 'utf-8');
}

export function writeFile(path: string, content: string): void {
    writeFileSync(path, content);
}
