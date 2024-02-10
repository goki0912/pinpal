import { Place as PlaceType } from '../../types/place';
import React, { useState } from 'react';
import Title from '../molecules/Title';
import Place from '../molecules/Place';
import PlaceAlert from '@/components/molecules/PlaceAlert';
import { useUpdateStatus } from '@/hooks/useUpdateStatus';
import MenuButton from '../atoms/MenuButton';
import CreatePlace from '../molecules/CreatePlace';

interface PlaceListProps {
  places: PlaceType[];
  onClick?: (id: number) => void;
  onMove?: (id: number) => void;
}

const PlaceList: React.FC<PlaceListProps> = ({ places, onClick, onMove }) => { // 仮のデータ
  const [showAlert, setShowAlert] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState<number>();

  const handleMoveClick = (id: number) => {
    setSelectedPlaceId(id);
    setShowAlert(true);
  };

  const handleConfirmYes = async () => {
    if (selectedPlaceId != null ) {
      await useUpdateStatus(selectedPlaceId, 2);
      setShowAlert(false);
    }
  };
  return (
    <div className='z-20'>
      <div className="flex items-center justify-between p-3">
        <Title title="Places I Want to Go" subtitle="行きたい場所をストックしよう！" />
        <MenuButton onClick={() => console.log("Menu button clicked")} />
      </div>
      <hr></hr>
      {places.map((place) => (
        <Place
          key={place.id}
          place={place}
          onClick={() => console.log('Clicked place id:', place.id)}
          onMove={() => handleMoveClick(place.id)}
        />
      ))}
      {showAlert && (
        <PlaceAlert
          place={places.find(place => place.id === selectedPlaceId)?.name || ''}
          onOpen={handleConfirmYes}
          onClose={() => setShowAlert(false)}
        />
      )}
      <CreatePlace onClick={() => console.log('Create place clicked')} />
    </div>
  );
}

export default PlaceList;
