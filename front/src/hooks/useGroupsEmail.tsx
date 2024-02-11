import { getGroupEmail } from '@/pages/api/groups';
import React, { useState , useEffect } from "react";
import { Email } from '@/types/groups';   

export const useGroupEmail = (id: number) => {
    const [ emails, setEmailById ] = useState<Email[]>([]);
    const fetchEmail = async () => {
        const emails = await getGroupEmail(id);
        setEmailById(emails);
    }

    useEffect(() => {
        fetchEmail();
    }, [id]);

    return emails;
};