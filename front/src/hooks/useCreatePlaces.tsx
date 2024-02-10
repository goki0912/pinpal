import { createPlace } from '@/pages/api/places';
import { Places } from '@/types/places';
import React, { useState , useEffect } from "react";

// places追加
export const useCreatePlace = () => {
    const [ formData, setFormData ] = useState<Places>({
        name: "",
        status: "",
        group_id: "",
        latitude: "",
        longitude: "",
        date:[],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        await createPlace(formData);
    };

    return { formData, handleChange, handleSubmit };
};