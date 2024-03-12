import crypto from 'crypto';

export const generateToken = () => {
    return Date.now().toString(16); // Converts current time to a hexadecimal string
}

const SECRET = 'SCISSOR-URL-SHORTENER'
export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string, expirationTimeInMinutes: number) => {
    const token = generateToken();
    const timestamp = Math.floor(Date.now() / 1000);
    const expiration = timestamp + (expirationTimeInMinutes * 60);
    const data = [salt, password, token, expiration].join('/');
    const hashed = crypto.createHmac('sha256', data).update(SECRET).digest('hex');
    return {
        token: token,
        expiration: expiration,
        hash: hashed
    };
}