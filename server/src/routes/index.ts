import {Express, Request, Response} from 'express'
import { createShortUrl } from '../controllers/shortURL.controller';

function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => {
        return res.send('App is healthy');
    });

    app.post('/api/url', createShortUrl);
}

export default routes;