const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const RmController = require('./controllers/RmController');
const CardapioController = require('./controllers/CardapioController');
const ProfileController = require('./controllers/ProfileController');
const UpdateController = require('./controllers/UpdateController');
const ContagemController = require('./controllers/ContagemController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/soma', ContagemController.store);

routes.post('/rm', RmController.store);

routes.get('/cardapios', CardapioController.index);
routes.post('/cardapios', upload.single('thumbnail'), CardapioController.store);

routes.put('/editar', UpdateController.store);
routes.post('/editar', upload.single('thumbnail'), UpdateController.store);

routes.get('/profile', ProfileController.show);

module.exports = routes;