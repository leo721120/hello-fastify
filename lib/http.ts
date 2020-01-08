import app from './app'

app.listen({
    port: parseInt(process.env.PORT as string),
}).then(function () {
    //
}).catch(function (e) {
    app.log.error(e);
});