import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'content/')

export const loadStringsForRegion = (region: string) => {
    let regionFile = path.join(CONTENT_DIR, 'strings-' + region.toLowerCase() + '.json')
    let fileContents = fs.readFileSync(regionFile, "utf8");
    
    return JSON.parse(fileContents);
}