const axios = require('axios');

class Mayar {
    constructor(baseURL, key) {
        this.client = axios.create({
            baseURL,
            headers: {
                Authorization: `Bearer ${key}`,
                'Content-Type': 'application/json',
            },
            maxBodyLength: Infinity,
        })
    }

    async getInvoice() {
        try {
            const res = await this.client.get('/invoice?sort=closed');

            return res.data;
        } catch (error) {
            const message = axios.isAxiosError(error) ? error.toJSON() : error;

            return { error: message};
        }
    }

    async getLink() {
        try {
            let data = JSON.stringify({
                "name": "andre",
                "email": "alikusnadie@gmail.com",
                "amount": 170000,
                "mobile": "085797522261",
                "redirectUrl": "https://kelaskami.com/nexst23",
                "description": "kemana ini menjadi a",
                "expiredAt": "2024-02-29T09:41:09.401Z"
            });
            const res = await this.client.post('/payment/create', data);

            return res.data;
        } catch (error) {
            const message = axios.isAxiosError(error) ? error.toJSON() : error;

            return { error: message};
        }
    }
}

module.exports = { Mayar }
