const express = require('express');
const router = express.Router();
const { listUploadedFiles } = require('../controllers/listFilesController');

router.get('/files', listUploadedFiles);

module.exports = router;