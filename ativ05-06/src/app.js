import express from 'express';
import animeRoutes from './controllers/crudanime.controller.js';
const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', animeRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});