import Checkbox from "../atoms/Checkbox";
import LocationIcon from "../atoms/LocationIcon";
import {Place} from "../../types/place";

interface PlaceProps {
    place: Place;
    onClick: () => void;
    // 確認モーダル表示
    onMove: () => void; 
    // mapに移動する関数を追加
}

const Place: React.FC<PlaceProps> = ({place,onClick,onMove}) => {
  const color = JSON.parse(place.group.color);
  return (
    <div className="flex items-center text-white h-1 m-2 p-8 rounded-lg" style={{ backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})` }} onClick={onMove}>
      <div className="mr-2 w-1/6">
        <Checkbox onClick={onClick} color="#FFFFF" />
      </div>
      <div className="w-5/6 items-center">
        <div className="flex">
            <LocationIcon />
            <span className="ml-3 text-xl font-medium">{place.name}</span>
        </div>
        <div className="w-full flex items-center">
            <span className="text-sm px-12">{place.group.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Place;
