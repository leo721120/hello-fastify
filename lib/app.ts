import * as middleware from 'fastify-plugin';
import * as ratelimit from 'express-rate-limit';
import * as compress from 'compression';
import * as fastify from 'fastify';
import * as helmet from 'helmet';
import * as cors from 'cors';

const app = fastify({
    requestIdLogLabel: 'rid',
    logger: true,
});
app.register(middleware(async function pluginGateway(ctx, opts) {
    ctx.use(ratelimit({}) as any);
    ctx.use(helmet() as any);
    ctx.use(cors() as any);
    ctx.use(compress() as any);
})).register(middleware(async function pluginService(ctx, opts) {
    ctx.all('/', function (req, res) {
        res.status(200).send();
    });
    ctx.all('/error/400', function (req, res) {
        res.status(400).send({
            error: 'test',
        });
    });
}));

export default app;