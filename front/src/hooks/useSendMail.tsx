// mailを送るためのカスタムフック
import { useState } from 'react';
import { sendEmail } from '@/pages/api/mail';

export const useSendMail = () => {
    const [email, setEmail] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async () => {
        await sendMail(email);
    };

    return { email, handleChange, handleSubmit };
};