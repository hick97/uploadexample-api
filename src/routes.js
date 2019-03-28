const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();
const postController = require('./controllers/post')

routes.get('/posts', postController.list);

routes.post('/posts', multer(multerConfig).single('file'), postController.store);

routes.delete('/posts/:id', postController.delete)




module.exports = routes;