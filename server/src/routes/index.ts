import {Express, Request, Response, Router} from 'express'
import { createShortUrl, handleRedirect, getAnalytics, getShortUrls, deleteUrl } from '../controllers/shortURL.controller';
import validateResource from '../middleware/validateResource';
import createShortUrlSchema from '../schemas/createShortUrl.schema';
import {login, register } from '../controllers/authentication.controller';

function routes(app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => {
        console.log("Hello");
        return res.send("App is healthy")
    })
    app.post('/api/url', validateResource(createShortUrlSchema), createShortUrl);

    app.get("/:shortId", handleRedirect);

    app.get("/api/analytics", getAnalytics);

    app.get("/api/shorturls", getShortUrls);

    app.post('/auth/register', register);
    
    app.post('/auth/signin', login);

    app.delete('/api/shorturls/:id', deleteUrl)
}

export default routes;