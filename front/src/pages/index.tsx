import Image from "next/image";
import { Inter } from "next/font/google";
import GoogleMap from '@/components/organisms/GoogleMap';
import  PlacesList  from '@/components/organisms/PlacesList';
import InputGroup from '@/components/organisms/InputGroup';
import InputDate from '@/components/organisms/InputDate';
import { useEffect, useState } from 'react';
import { usePlaces } from '@/hooks/usePlaces';
import Autocomplete from '@/components/molecules/AutoComplete';
import CreatePlaceForm from '@/components/organisms/CreatePlaceForm';

export default function Home() {
  const allPlace = usePlaces();
  const [placesListHeight, setPlacesListHeight] = useState('0vh');
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      // ビューポートの高さに基づいて、スクロール量に応じた高さを計算
      const newHeight = Math.max(0, window.scrollY - window.innerHeight) + 'px';
      setPlacesListHeight(newHeight);
    };
    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', handleScroll);
    // クリーンアップ関数
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <main>
      <GoogleMap />
      <PlacesList places={allPlace} />
      <CreatePlaceForm onClick={() => console.log("aaa")} />
    </main>
  );
}
