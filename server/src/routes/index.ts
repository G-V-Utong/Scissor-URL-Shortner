import {Express, Request, Response} from 'express'
import { createShortUrl, handleRedirect, getAnalytics } from '../controllers/shortURL.controller';
import validateResource from '../middleware/validateResource';
import createShortUrlSchema from '../schemas/createShortUrl.schema';

function routes(app: Express) {
    app.post('/api/url', validateResource(createShortUrlSchema), createShortUrl);

    app.get("/:shortId", handleRedirect);

    app.get("/api/analytics", getAnalytics);
}

export default routes;