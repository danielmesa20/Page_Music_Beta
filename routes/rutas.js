const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>  {
    res.render('paginaPrincipal');
});


router.get('/bioSinai', (req, res) =>  {
    res.render('integrantes/bioSinai');
});

router.get('/bioOriana', (req, res) =>  {
    res.render('integrantes/bioOriana');
});

router.get('/fotos', (req, res) =>  {
    res.render('fotos');
});

module.exports = router;