import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';

export function isPathExist(path: string): boolean {
    return existsSync(path);
}

export function readFile(path: string): string {
    return readFileSync(path, 'utf-8');
}

export function createDirectory(path: string): void {
    mkdirSync(path, { recursive: true });
}

export function writeFile(path: string, content: string): void {
    writeFileSync(path, content);
}

export function appendFile(path: string, content: string): void {
    appendFileSync(path, content);
}
