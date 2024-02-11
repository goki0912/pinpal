import { getPlacesByGroup } from '@/pages/api/places';
import React, { useState , useEffect } from "react";
import { PlacesPost } from '@/types/placesPost';   

export const usePlacesByGroup = (id: number) => {
    const [ places, setPlaces ] = useState<PlacesPost[]>([]);
    const fetchPlaces = async () => {
        const Places = await getPlacesByGroup(id);
        setPlaces(Places);
    }

    useEffect(() => {
        fetchPlaces();
    }, [id]);

    return places;
};