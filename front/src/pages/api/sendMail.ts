import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email } = req.body;

        const transporter = nodemailer.createTransport({
            host: 'localhost',
            port: 1025,
            auth: {
                user: 'test',
                pass: 'test'
            },
        });

        const mailOptions = {
            from: '"Example" <example@example.com>',
            to: email,
            subject: 'イベント招待メールのお知らせ',
            text: 'テストメールです',
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
            return res.status(200).json({ message: 'Email sent: ' + info.response });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}