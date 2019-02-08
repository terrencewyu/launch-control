// server.js
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './launch-routes';

const port = 8080;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});
const routes = new Routes();
routes.routes(app);

app.listen(port, () => {
    console.log('Express server listening on port ' + port);
})
