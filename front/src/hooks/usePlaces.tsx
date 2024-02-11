import { getPlaces } from '@/pages/api/places';
import React, { useState , useEffect } from "react";
import { Place } from '@/types/place';   

export const usePlaces = () => {
    const [ places, setPlaces ] = useState<Place[]>([]);
    const [reload, setReload] = useState(false); 
    const fetchPlaces = async () => {
        const Places = await getPlaces();
        setPlaces(Places);
    }

    useEffect(() => {
        fetchPlaces();
    }, [reload]);

    // データを再読み込みするための関数を追加
    const refreshPlaces = () => {
        setReload(prev => !prev); // reload状態を切り替えてエフェクトをトリガー
    }

    return {places, refreshPlaces};
};
