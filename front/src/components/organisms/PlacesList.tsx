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

const PlaceList: React.FC<PlaceListProps> = ({ places, onClick, onMove , visible, onChangeVisible,onPlaceSelect}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState<number>();
  const [clicked,setClicked] = useState(false);
  const allPlace = usePlaces();

  const handleMap = (id: number) => {
    setSelectedPlaceId(id);
    setShowAlert(true);
  };

  const handleConfirmYes = async () => {
    if (selectedPlaceId != null ) {
      await useUpdateStatus(selectedPlaceId, 2);
      setShowAlert(false);
      setClicked(false);
    }
  };

  const handleMoveClick = (id:number,latitude:number,longitude:number) => {
    if(clicked){
        return;
    }
    setClicked(false);
    setShowAlert(false);
    onPlaceSelect(latitude, longitude)
    scroll.scrollToTop();
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
      {allPlace.map((place) => (
        <Place
          key={place.id}
          place={place}
          onClick={()=>handleMap(place.id)}
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
