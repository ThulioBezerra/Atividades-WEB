import { animes, saveAnimes } from '../../data/animes-data.js';
export default class AnimeRepository {
    constructor() {
        this.animes = animes;
    }

    findAll() {
        return animes;
    }

    findOne(id) {
        const anime = animes.find(a => a.id === parseInt(id));
        if (!anime) return ({ error: 'Anime not found' });
        return anime
    }

    deleteAnime(id) {
        const index = this.animes.findIndex(anime => anime.id === id);
        if (index !== -1) {
            this.animes.splice(index, 1);
            saveAnimes();
            return ({ message: "Anime with id " + id + " deleted" });
        }
        return ({ error: 'Anime not found' });
    }

    updateAnime(updatedAnime) {
        const anime = animes.find(a => a.id === parseInt(updatedAnime.id));
        if (!anime) return ({ error: 'Anime not found' });
        anime.name = updatedAnime.name || anime.name;
        anime.genre = updatedAnime.genre || anime.genre;
        anime.studio = updatedAnime.studio || anime.studio;
        saveAnimes();
        return anime;
    }
    createAnime(newAnime) {
        newAnime.id = this.animes.length ? this.animes[this.animes.length - 1].id + 1 : 1;
        this.animes.push(newAnime);
        saveAnimes();
        return newAnime;
    }

}