import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email } = req.body;

        const transporter = nodemailer.createTransport({
            host: 'localhost',
            port: 8025,
        });

        const mailOptions = {
            from: 'admin@gmail.com',
            to: email,
            subject: 'イベント招待メールのお知らせ',
            text: 'テストメールです',
        };

        transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json({ message: 'Email sent: ' + info.response });
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}