const express = require('express');
const router = express.Router();
const news = require('../controllers/news.controller.js');
const uri = '/news/'

function prueba (req, res) {
    res.json({
        status: 'Probado'
    });
}

router.get(uri + 'asdf', prueba);
router.get(uri, news.getNews);
router.post(uri, news.createNews);
router.put(uri + ':id', news.editNews);
router.delete(uri + ':id', news.deleteNews);
module.exports = router;