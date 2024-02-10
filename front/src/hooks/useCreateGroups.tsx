import { createGroup } from '@/pages/api/groups';
import React, { useState , useEffect } from "react";
import { GroupsMember } from '@/types/groupsMember';

// places追加
export const useCreatePlace = () => {
    const [ formData, setFormData ] = useState<GroupsMember>({
        name: "",
        color: {
            r: 0,
            g: 0,
            b: 0,
            a: 1.0,
        },
        email:[],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        await createGroup(formData);
    };

    return { formData, handleChange, handleSubmit };
};