const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const CardapioController = require('./controllers/CardapioController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/cardapios', CardapioController.index);
routes.post('/cardapios', upload.single('thumbnail'), CardapioController.store);

routes.get('/profile', ProfileController.show);

module.exports = routes;