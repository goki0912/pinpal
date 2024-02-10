import React, { useEffect, useRef, useState } from 'react';

// 初期化用の定数
const INITIALIZE_LAT = 35.68238;
const INITIALIZE_LNG = 139.76556;
const INITIALIZE_ZOOM = 16; // ズームレベル


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
        });

        setMap(initializedMap);
    }, []);

    return (
        <div>
            <div ref={mapRef} style={{ width: mapSize.width, height: mapSize.height }} />
        </div>
    )
}

export default GoogleMap;
