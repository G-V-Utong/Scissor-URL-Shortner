import express from 'express';
import config from 'config';
import routes from './routes'
import bodyParser from 'body-parser';
import {db} from './db';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = config.get('PORT') || 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//body-parser
app.use(bodyParser.json());
// app.use(compression);
app.use(cors({
    origin: config.get('corsOrigin'),
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['withCredentials', 'Origin', 'X-Requested-With', 'Accept','Content-Type', 'Authorization'],
    credentials: true
}));

app.options('*', cors({
    origin: config.get('corsOrigin'),
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization', 'withCredentials'],
    credentials: true
  }));

  app.use(express.static(path.join(__dirname + "/public")))

app.listen(port, () => {
    console.log(`Application started and listening at http://localhost:${port}`);
    db();
    routes(app);
})