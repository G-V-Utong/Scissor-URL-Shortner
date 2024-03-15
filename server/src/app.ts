import express from 'express';
import config from 'config';
import routes from './routes'
import bodyParser from 'body-parser';
import {db} from './db';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import 'dotenv/config'
import dotenv from 'dotenv';

const app = express();

const port = process.env.PORT || 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

//body-parser
app.use(bodyParser.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['withCredentials', 'Origin', 'X-Requested-With', 'Accept','Content-Type', 'Authorization'],
    credentials: true
}));

app.options('*', cors({
    origin: process.env.CORS_ORIGIN,
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