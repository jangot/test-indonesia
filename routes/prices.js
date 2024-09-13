const express = require('express');
const router = express.Router();

const { Mayar } = require('../services/mayar');
const config = require('../configuration');

router.get('/', (req, res, next) => {
    res.render('prices', { title: 'Prices' });
});

router.get('/link', async (req, res, next) => {
    const service = new Mayar(config.mayar.baseUrl, config.mayar.key, config.mayar.sid)
    const invoice = await service.getInvoice();

    res.send({ invoice });
});

module.exports = router;
