import { getPlaces } from '@/pages/api/places';
import React, { useState , useEffect } from "react";
import { Places } from '@/types/places';   

export const usePlaces = () => {
    const [ places, setPlaces ] = useState<Places[]>([]);
    const fetchPlaces = async () => {
        const Places = await getPlaces();
        setPlaces(Places);
    }

    useEffect(() => {
        fetchPlaces();
    }, [fetchPlaces]);

    return places;
};

