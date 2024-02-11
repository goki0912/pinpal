import { Place as PlaceType } from '../../types/place';
import Title from '../molecules/Title';
import Place from '../molecules/Place';
import MenuButton from '../atoms/MenuButton';
import CreatePlace from '../molecules/CreatePlace';

interface PlaceListProps {
    places: PlaceType[];
    onClick: (id: number) => void;
    onMove: (id: number)=> void;
}

const PlaceList: React.FC<PlaceListProps> = ({ places, onClick, onMove }) => { // propsを正しく展開する
    console.log(places)
    return (
      <div>
        <div className="flex items-center justify-between p-3">
          <Title title="Places I Want to Go" subtitle="行きたい場所をストックしよう！" />
          <MenuButton onClick={() => console.log("Menu button clicked")} />
        </div>
      <hr></hr>
      {places.map((place) => (
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
