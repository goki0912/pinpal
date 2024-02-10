import { createPlace } from '@/pages/api/places';
import { PlacesPost } from '@/types/placesPost';
import React, { useState , useEffect } from "react";

// places追加
export const useCreatePlace = () => {
    const [ formData, setFormData ] = useState<PlacesPost>({
        name: "",
        status: 0,
        group_id: 0,
        latitude: 0,
        longitude: 0,
        date:[],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitCreate = async () => {
        await createPlace(formData);
    };

    return { formData, handleChange, handleSubmitCreate };
};