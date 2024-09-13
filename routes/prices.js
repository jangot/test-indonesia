const express = require('express');
const router = express.Router();

const { Mayar } = require('../services/mayar');
const config = require('../configuration');

router.get('/', (req, res, next) => {
    res.render('prices', { title: 'Prices' });
});

router.post('/link', async (req, res, next) => {
    const service = new Mayar(config.mayar.baseUrl, config.mayar.key)

    console.log('req.body', req)
    if (!req.body['name']) {
        res.send({ error: 'Required parameters' });
    } else {
        const link = await service.getLink(req.body);
        res.send(link);
    }
});

module.exports = router;
