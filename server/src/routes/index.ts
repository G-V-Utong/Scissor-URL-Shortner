import {Express, Request, Response, Router} from 'express'
import { createShortUrl, handleRedirect, getAnalytics } from '../controllers/shortURL.controller';
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

    app.post('/auth/register', register);
    
    app.post('/auth/signin', login);
}

export default routes;