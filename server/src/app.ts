import express from 'express';
import config from 'config';
import routes from './routes'
import bodyParser from 'body-parser';
import {db} from './db';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';

const app = express();
const port = config.get('port');

//body-parser
app.use(bodyParser.json());
// app.use(compression);
app.use(cors({
    origin: config.get('corsOrigin'),
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.listen(port, () => {
    console.log(`Application started and listening at http://localhost:${port}`);
    db();
    routes(app);
})