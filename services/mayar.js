const axios = require('axios');

class Mayar {
    constructor(baseURL, key, sid) {
        this.client = axios.create({
            baseURL,
            headers: {
                Authorization: `Bearer ${key}`
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
}

module.exports = { Mayar }
