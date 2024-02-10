import { getPlacesByGroup } from '@/pages/api/places';
import React, { useState , useEffect } from "react";
import { Places } from '@/types/places';   

export const usePlacesByGroup = (id: number) => {
    const [ places, setPlaces ] = useState<Places[]>([]);
    const fetchPlaces = async () => {
        const Places = await getPlacesByGroup(id);
        setPlaces(Places);
    }

    useEffect(() => {
        fetchPlaces();
    }, [id]);

    return places;
};