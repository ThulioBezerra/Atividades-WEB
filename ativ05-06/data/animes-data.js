import fs from 'fs';
import path from 'path';


const filePath = path.resolve('data', 'animes-bd.json');

let animes = [];
if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    animes = JSON.parse(data);
} else {
    saveAnimes();
}

const saveAnimes = () => {
    fs.writeFileSync(filePath, JSON.stringify(animes, null, 2));
};


export { animes, saveAnimes };

