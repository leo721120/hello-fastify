import * as pino from 'pino'
import app from '../lib/app'

describe('GET /', function() {
    (app.log as pino.Logger).level = 'silent';
    
    it('200', async function() {
        await app.ready();
        const res = await app.inject({
            url: '/',
            method: 'GET',
        });
        expect(res.statusCode).toBe(200);
    });
});