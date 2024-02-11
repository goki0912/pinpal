import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 8025,
});

// emailを引数で受け取り、mailhogに送信する
export const useSendMail = async (email: string) => {
    const mailOptions = {
        from: 'admin@gmail.com',
        to: email,
        subject: 'イベント招待メールのお知らせ',
        text: 'テストメールです',
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
}