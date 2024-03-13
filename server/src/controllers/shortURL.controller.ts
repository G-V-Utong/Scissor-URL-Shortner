import {Request, Response} from 'express';
import shortUrl from '../models/shortURL.model';
import analytics from '../models/analytics.model';

export async function createShortUrl(req: Request, res: Response){
    const { destination, userId } = req.body;
    const newURL = await shortUrl.create({destination, createdBy: userId})
    
return res.send(newURL);
}

export async function handleRedirect(req: Request, res: Response) {
    const { shortId } = req.params;
  
    const short = await shortUrl.findOne({ shortId });
  
    if (!short) {
      return res.sendStatus(404);
    }
  
    short.Clicks++
    await short.save()
    analytics.create({ shortUrl: short._id });
    return res.redirect(short.destination);
  }
  
  export async function getAnalytics(req: Request, res: Response) {
    const data = await analytics.find({}).lean();
  
    return res.send(data);
  }

  export async function getShortUrls(req: Request, res: Response) {
    const data = await shortUrl.find({}).lean();
  
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

  export const deleteUrl = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      let response = await shortUrl.findByIdAndDelete(id);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).send('deleteFailed');
    }
  };