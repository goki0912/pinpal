import { Places } from '@/types/places';

// placesの一覧を取得する
export const getPlaces  = async () => {
    try {
        const response = await fetch(
            'http://localhost:80/api/places', 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const Places = await response.json();
        return Places;
    }catch(e){
        console.error(e);
    }
}

// 特定のタグのplaces一覧を取得する
export const getPlacesByGroup = async (groupId: number) => {
    try {
        const response = await fetch(
            `http://localhost:80/api/places/${groupId}`, 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const PlacesByGroup = await response.json();
        return PlacesByGroup;
    }catch(e){
        console.error(e);
    }
}

// placeを作成する
export const createPlace = async (place : Places) => {
    const token = sessionStorage.getItem('access_token');

    try {
        const response = await fetch(
            'http://localhost:80/api/places', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}', 
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(place),
            }
        );
        const createdPlace = await response.json();
        return createdPlace;
    }catch(e){
        console.error(e);
    }
}