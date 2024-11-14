import express from 'express';
import animesService from '../services/anime-services.js';
const router = express.Router();
const serviceAnime = new animesService();


router.get('/animes', (req, res) => {
    res.status(200).json(serviceAnime.findAll());
});


router.get('/animes/:id', (req, res) => {
    const anime = serviceAnime.findOne(req.params.id);
    if (anime.error) return res.status(404).send('Anime not found');
    res.status(200).json(anime);
});


router.post('/animes', (req, res) => {
    if (!req.body.name || !req.body.genre || !req.body.studio) {
        return res.status(400).send('Missing data');
    }
    const newAnime = {
        id: 0,
        name: req.body.name,
        genre: req.body.genre,
        studio: req.body.studio,
    }
    return res.status(200).json(serviceAnime.create(newAnime));
});


router.put('/animes/:id', (req, res) => {
    if (!req.body.name || !req.body.genre || !req.body.studio) {
        return res.status(400).send('Missing data');
    }
    const idParse = parseInt(req.params.id);
    const anime = {
        id: idParse,
        name: req.body.name,
        genre: req.body.genre,
        studio: req.body.studio,
    }
    const animeStatus = serviceAnime.update(anime);
    if (animeStatus.error) return res.status(404).send(animeStatus);
    return res.status(200).json(animeStatus);
});


router.delete('/animes/:id', (req, res) => {
    const animeId = parseInt(req.params.id);
    const animeStatus = serviceAnime.delete(animeId)
    if (animeStatus.error) return res.status(404).send(animeStatus);
    return res.status(200).send(animeStatus);


});

export default router;
