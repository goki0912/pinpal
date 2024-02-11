import { Place as PlaceType } from '../../types/place';
import React, { useState } from 'react';
import Title from '../molecules/Title';
import Place from '../molecules/Place';
import PlaceAlert from '@/components/molecules/PlaceAlert';
import { useUpdateStatus } from '@/hooks/useUpdateStatus';
import MenuButton from '../atoms/MenuButton';
import CreatePlace from '../molecules/CreatePlace';
import { animateScroll as scroll } from 'react-scroll';
import CreatePlaceForm from './CreatePlaceForm';
import { useEffect } from 'react';
import { usePlaces } from '@/hooks/usePlaces';

interface PlaceListProps {
    places: PlaceType[];
    onClick?: (id: number) => void;
    onMove?: (id: number)=> void;
    visible: boolean;
    onChangeVisible: () => void;
    onPlaceSelect: (latitude: number, longitude: number) => void;
}


const PlaceList: React.FC<PlaceListProps> = ({ onClick, onMove , visible, onChangeVisible,onPlaceSelect}) => {
  const { places, refreshPlaces } = usePlaces();
  const [placesList, setPlacesList] = useState<PlaceType[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState<number>();
  const [clicked,setClicked] = useState(false);
  const allPlace = usePlaces();

  const handleMap = (id: number,status: number) => {
    setShowAlert(true);
    if(status === 2){
      return;
    }
    setClicked(true);
    // 地図の操作を行うなどの処理
    setTimeout(() => setClicked(false), 500);
    setSelectedPlaceId(id);
    console.log('Clicked handleMap', status);
    console.log('Clicked handleMap', clicked);

  };

  const handleConfirmYes = async () => {
    if (selectedPlaceId != null ) {
      setShowAlert(false);
      setClicked(false);
      await useUpdateStatus(selectedPlaceId, 2);
      refreshPlaces();
    }
  };

  const handleMoveClick = (id:number,latitude:number,longitude:number) => {
    if (showAlert) {
      console.log("Alert is showing, skipping the move click action.");
      console.log('Scrolltop');
      return;
  }else{

    console.log('Clicked handleMoveCl', id);
    onPlaceSelect(latitude, longitude)
    if(!showAlert){
      console.log('showa', showAlert);
      console.log('Scrolltop2000');
      scroll.scrollToTop({
        duration: 2000, // 500ミリ秒でスクロール
        delay: 200, // 遅延なし
        smooth: "easeInOutQuart", // スムーズスクロールの種類（任意で選択）
      });
    }
    if(!clicked){
        return;
    }
    setShowAlert(false);
  }
  }
  
  const onClosed = () => {
    setShowAlert(false);
    setClicked(false);
}

  return (
    <div className='z-20' style={{display: visible ? "block" : "none"}}>
      <div className="flex items-center justify-between p-3">
        <Title title="Places I Want to Go" subtitle="行きたい場所をストックしよう！" />
        <MenuButton onClick={() => console.log("Menu button clicked")} />
      </div>
      <hr></hr>
      {places.map((place) => (
        <Place
          key={place.id}
          place={place}
          onClick={()=>handleMap(place.id,place.status)}
          onMove={() => handleMoveClick(place.id,place.latitude,place.longitude)}
        />
      ))}
      {showAlert && (
        <PlaceAlert
          place={places.find(place => place.id === selectedPlaceId)?.name || ''}
          onOpen={handleConfirmYes}
          onClose={onClosed}
        />
      )}
      <CreatePlace onClick={onChangeVisible} />
    </div>
  );
}

export default PlaceList;
