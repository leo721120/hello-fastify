import app from './app'

app.listen({
    port: process.env.PORT ? parseInt(process.env.PORT as string) : undefined,
}).then(function () {
    //
}).catch(function (e) {
    app.log.error(e);
});