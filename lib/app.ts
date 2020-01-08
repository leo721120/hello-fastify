import { IncomingMessage } from 'http'
import { LoggerOptions } from 'pino'
import * as fastify from 'fastify'

const app = fastify({
    requestIdLogLabel: 'rid',
    logger: true,
});
app.all('/', function (req, res) {
    res.status(200).send();
});
app.all('/error/400', function (req, res) {
    res.status(400).send({
        error: 'test',
    });
});

export default app;