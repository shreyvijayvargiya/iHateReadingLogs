const jsonserver = require('json-server');
const server = jsonserver.create();
const router = jsonserver.router('db.json');
const middlewares = jsonserver.defaults()

server.use(router);
server.use(middlewares);
server.use('/api', router);
server.use((req, res, next) => {
    res.setHeader('X-World', 'Hello');
    next()
});
server.listen(3000, () => console.log('Server is listening on PORT 3000'));

