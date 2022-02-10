const express = require('express');
const upload = require('../ultil/upload');
const router = express.Router();

const shoesController = require('../app/controller/ShoesController');

router.get('/create', shoesController.create);

router.post('/store', upload.single('image'), shoesController.store);

router.get('/:id/edit', shoesController.edit);

router.put('/:id', upload.single('image'), shoesController.update);

router.patch('/:id/restore', shoesController.restore);

router.delete('/:id', shoesController.delete);

router.delete('/:id/force', shoesController.deleteForever);

router.get('/:slug', shoesController.show);

module.exports = router;