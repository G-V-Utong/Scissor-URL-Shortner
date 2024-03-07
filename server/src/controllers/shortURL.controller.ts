import {Request, Response} from 'express';
import shortUrl from '../models/shortURL.model';
import analytics from '../models/analytics.model';

export async function createShortUrl(req: Request, res: Response){
    const { destination } = req.body;
    // console.log(destination)
    const newURL = await shortUrl.create({destination})

return res.send(newURL);
}

export async function handleRedirect(req: Request, res: Response) {
    const { shortId } = req.params;
  
    const short = await shortUrl.findOne({ shortId }).lean();
  
    if (!short) {
      return res.sendStatus(404);
    }
  
    analytics.create({ shortUrl: short._id });
  
    return res.redirect(short.destination);
  }
  
  export async function getAnalytics(req: Request, res: Response) {
    const data = await analytics.find({}).lean();
  
    return res.send(data);
  }
  
  export async function getShortUrl(req: Request, res: Response) {
    const { shortId } = req.params;
    const short = await shortUrl.findOne({ shortId }).lean();
  
    if (!short) {
      return res.sendStatus(404);
    }
  
    return res.json(short);
  }