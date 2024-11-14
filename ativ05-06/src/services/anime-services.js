import AnimeRepository from "../repository/anime-repo.js";

const repo = new AnimeRepository();
export default class AnimeService {
    constructor() {
    }

    findAll() {
        return repo.findAll();
    }

    findOne(id) {
        return repo.findOne(id);
    }

    delete(id) {
        return repo.deleteAnime(id);
    }

    update(updatedAnime) {
        return repo.updateAnime(updatedAnime);
    }
    create(newAnime) {
        return repo.createAnime(newAnime);
    }
}
