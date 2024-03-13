import Express from 'express';
import { qrCodeScan } from '../controllers/qrCode.controller';

export default (router: Express.Router) => {
    router.post('/api/qrcode', qrCodeScan)
}