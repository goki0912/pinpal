import Checkbox from "../atoms/Checkbox";
import LocationIcon from "../atoms/LocationIcon";
import { Place } from "../../types/place";
import { useEffect, useState } from "react";

interface PlaceProps {
  place: Place;
  onClick: (id: number, latitude: number, longitude: number) => void;
  // 確認モーダル表示
  onMove: () => void;
  // mapに移動する関数を追加
}

const Place: React.FC<PlaceProps> = ({ place, onClick, onMove }) => {
  if (!place.group) return null;
  const color = JSON.parse(place.group.color);
  return (
    <>
      {
        place.group.name && (
          <div className="flex items-center text-white h-1 m-2 p-8 rounded-lg" style={{ backgroundColor: place.status === 2 ? '#C8C8C8' : `rgba(${color.r},${color.g},${color.b},${color.a})` }} onClick={onMove}>
            <div className="mr-2 w-1/6">
              <Checkbox onClick={onClick} color="#FFFFFF" />
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
        )
      }
    </>
  );
};

export default Place;
