const express = require('express');
const router = express.Router();
const floorplanController = require('../controller/floorplanController');

router.post('/search', floorplanController.search);
router.post('/entity', floorplanController.getEntity);
router.get('/entity/:id', floorplanController.getEntityById);
router.get('/allentities', floorplanController.getAllEntities);
router.post('/save', floorplanController.save);
router.post('/delete', floorplanController.delete);

module.exports = router;