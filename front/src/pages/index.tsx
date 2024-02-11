import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import GoogleMap from '@/components/organisms/GoogleMap';
import PlacesList from '@/components/organisms/PlacesList';
import InputGroup from '@/components/organisms/InputGroup';
import InputDate from '@/components/organisms/InputDate';

import { usePlaces } from '@/hooks/usePlaces';
import Autocomplete from '@/components/molecules/AutoComplete';
import CreatePlaceForm from '@/components/organisms/CreatePlaceForm';
// import { handleCreatePlaceClick } from '@/components/organisms/CreatePlaceForm';
import PlaceList from '@/components/organisms/PlacesList';
import { log } from "console";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const allPlace = usePlaces();
  const [visible, setVisible] = useState(true); // PlaceList の表示状態
  const [mapCenter, setMapCenter] = useState({lat: 35.682839, lng: 139.759455}); // 初期中心座標
  const handlePlaceSelect = (lat: any, lng: any) => {
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    setMapCenter({ lat, lng });
  };



  const changeVisible = () => {
    setVisible(!visible); // visible 状態を切り替える
  };


  return (
    <main>
      <GoogleMap center={mapCenter}/>
      {visible && <PlaceList places={allPlace} visible={visible} onChangeVisible={changeVisible} onPlaceSelect={handlePlaceSelect} />}
      {!visible && <CreatePlaceForm changeVisible={changeVisible}/>} {/* visible が false のときに CreatePlaceForm を表示 */}
    </main>
  );
}
