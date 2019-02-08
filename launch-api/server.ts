// server.ts
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './launch-routes';

const port = 8080;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});
const routes = new Routes();
routes.routes(app);

app.listen(port, () => {
    console.log('Express server listening on port ' + port);
})
