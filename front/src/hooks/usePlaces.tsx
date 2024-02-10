import { getPlaces } from '@/pages/api/places';
import React, { useState , useEffect } from "react";
import { Place } from '@/types/place';   

export const usePlaces = () => {
    const [ places, setPlaces ] = useState<Place[]>([]);
    const fetchPlaces = async () => {
        const Places = await getPlaces();
        setPlaces(Places);
    }

    useEffect(() => {
        fetchPlaces();
    }, []);

    return places;
};
