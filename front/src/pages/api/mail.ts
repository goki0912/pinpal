import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 8025,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email } = req.query;
    
    try {
        await transporter.sendMail({
            from: 'noreply@example.com',
            to: email,
            subject: 'テストメール',
            text: 'これはテストメールです。',
        });

    res.status(200).json({ message: 'メール送信成功' });
    
    } catch (error) {
        res.status(500).json({ message: 'メール送信失敗' });
    }
}