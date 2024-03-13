import express from 'express';
import qrcode from 'qrcode';
import config from "config";

export const qrCodeScan = (req: express.Request, res: express.Response) => {
        const { shortId } = req.body;
        const serverEndpoint = config.get("SERVER_ENDPOINT") as string;
        const qrCode = `${serverEndpoint}/${shortId}`
        qrcode.toDataURL(qrCode, (error, url) => {

            res.send({qr_code: url})
        })
        
}