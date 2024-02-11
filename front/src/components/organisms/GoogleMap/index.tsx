import React, { useEffect, useRef, useState } from 'react';
import { usePlaces } from '@/hooks/usePlaces';

// 初期化用の定数
const INITIALIZE_LAT = 35.68238;
const INITIALIZE_LNG = 139.76556;
const INITIALIZE_ZOOM = 16; // ズームレベル
const MAPID = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_ID;
// `center` プロパティの型を定義
interface Center {
    lat: number;
    lng: number;
}

interface GoogleMapProps {
    center: Center;
}

const GoogleMap: React.FC<GoogleMapProps> = ({center}) => {
    const {places} = usePlaces();
    console.log(places);
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [mapSize, setMapSize] = useState({
        width: '100vw', 
        height: '90vh' 
    });


    useEffect(() => {
        if (mapRef.current && !map) {
            const initializedMap = new google.maps.Map(mapRef.current, {
                center: center,
                zoom: INITIALIZE_ZOOM,
                fullscreenControl: false,
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                mapId: MAPID,
            });

            setMap(initializedMap);
        }
    }, [mapRef, map, center]); // `center` が変更された時にも useEffect を実行

    useEffect(() => {
        if (map && center) {
            map.setCenter(center); // `center` プロパティが更新されたときに中心を設定
        }
    }, [center, map]);
    useEffect(() => {
        const handleResize = () => {
            setMapSize({
                width: `100vw`,
                height: `90vh`
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!mapRef.current) return;
    
        const initializedMap = new google.maps.Map(mapRef.current, {
            center: { lat: INITIALIZE_LAT, lng: INITIALIZE_LNG },
            zoom: INITIALIZE_ZOOM,
            fullscreenControl: false,
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            mapId: MAPID,
        });
    
        setMap(initializedMap);
    
        places.forEach(markerInfo => {
            // latitude と longitude を数値に変換
            const lat = Number(markerInfo.latitude);
            const lng = Number(markerInfo.longitude);
    
            // グループの色情報を解析
            const color = JSON.parse(markerInfo.group.color);
    
            // マーカーを設置
            const marker = new google.maps.Marker({
                position: { lat: lat, lng: lng },
                map: initializedMap,
                title: markerInfo.name,
                icon: {
                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                    fillColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
                    fillOpacity: 1.0,
                    strokeWeight: 0,
                    scale: 8, // マーカーのサイズを調整
                },
            });
        });
    }, [places]); // markers が更新された時にのみ実行
    

    return (
        <div className='h-full w-full'>
            <div className='top-0 left-0 fixed w-full h-full' ref={mapRef} style={{ width: mapSize.width, height: mapSize.height }} />
            <div className="flex justify-center bg-white h-2"></div>
        </div>
    )
}

export default GoogleMap;
