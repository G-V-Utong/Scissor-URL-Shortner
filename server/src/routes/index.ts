import {Express, Request, Response} from 'express'
import { createShortUrl, handleRedirect } from '../controllers/shortURL.controller';
import validateResource from '../middleware/validateResource';
import createShortUrlSchema from '../schemas/createShortUrl.schema';

function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => {
        return res.send('App is healthy');
    });

    app.post('/api/url', validateResource(createShortUrlSchema), createShortUrl);

    app.get("/:shortId", handleRedirect);
}

export default routes;