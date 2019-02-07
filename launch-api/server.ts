// server.js
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './launchRoutes';

const port = 8080;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const routes = new Routes();
routes.routes(app);

app.listen(port, () => {
    console.log('Express server listening on port ' + port);
})
