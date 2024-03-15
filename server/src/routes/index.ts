import {Express, Request, Response, Router} from 'express'
import { createShortUrl, handleRedirect, getAnalytics, getShortUrls, deleteUrl } from '../controllers/shortURL.controller';
import validateResource from '../middleware/validateResource';
import createShortUrlSchema from '../schemas/createShortUrl.schema';
import {login, register } from '../controllers/authentication.controller';
import { isAuthenticated } from '../middleware/validateAuth';
import { qrCodeScan } from '../controllers/qrCode.controller';

function routes(app: Express) {
    app.post('/api/url', validateResource(createShortUrlSchema), createShortUrl);

    app.get("/:shortId", handleRedirect);

    app.get("/api/analytics", getAnalytics);

    app.get("/api/shorturls", getShortUrls);

    app.post('/auth/register', register);
    
    app.post('/auth/signin', login);

    app.delete('/api/shorturls/:id', deleteUrl);

    app.post('/api/qrcode', qrCodeScan);
}

export default routes;