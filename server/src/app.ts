import express from 'express';
import config from 'config';
import routes from './routes'
import bodyParser from 'body-parser';
import {db} from './db';
import cors from 'cors';

const app = express();
const port = config.get('port');

//body-parser
app.use(bodyParser.json());

app.use(cors({
    origin: config.get('corsOrigin'),
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.listen(port, () => {
    console.log(`Application started and listening at https://localhost:${port}`);
    db();
    routes(app);
})