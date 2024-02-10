import React, { useEffect, useRef, useState } from 'react';

// 初期化用の定数
const INITIALIZE_LAT = 35.68238;
const INITIALIZE_LNG = 139.76556;
const INITIALIZE_ZOOM = 16; // ズームレベル
const MAPID = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_ID;


const GoogleMap: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [mapSize, setMapSize] = useState({
        width: '100vw', 
        height: '100vh' 
    });
    useEffect(() => {
        const handleResize = () => {
            setMapSize({
                width: `${window.innerWidth}px`,
                height: `${window.innerHeight}px`
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

        const markers = [
            { lat: 35.68238, lng: 139.76556, content: 'Marker 1', color: { r: 255, g: 0, b: 0, a: 1.0 } },
            { lat: 35.64238, lng: 139.76565, content: 'Marker 2', color: { r: 0, g: 255, b: 0, a: 1.0 } },
            { lat: 35.68238, lng: 139.76543, content: 'Marker 3', color: { r: 11, g: 24, b: 46, a: 1.0 } },
        ];

        markers.forEach(markerInfo => {
            const marker = new google.maps.Marker({
                position: { lat: markerInfo.lat, lng: markerInfo.lng },
                map: initializedMap,
                title: markerInfo.content,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: `rgba(${markerInfo.color.r},${markerInfo.color.g},${markerInfo.color.b},${markerInfo.color.a})`,
                    fillOpacity: 1.0,
                    strokeWeight: 0,
                    scale: 8, 
                },
            });
        });
    }, []);

    return (
        <div>
            <div ref={mapRef} style={{ width: mapSize.width, height: mapSize.height }} />
        </div>
    )
}

export default GoogleMap;
