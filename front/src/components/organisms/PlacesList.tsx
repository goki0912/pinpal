import { Place as PlaceType } from '../../types/place';
import Title from '../molecules/Title';
import Place from '../molecules/Place';
import MenuButton from '../atoms/MenuButton';
import CreatePlace from '../molecules/CreatePlace';
import React, { useState } from 'react';
import CreatePlaceForm from './CreatePlaceForm';
import { useEffect } from 'react';

interface PlaceListProps {
    places: PlaceType[];
    onClick?: (id: number) => void;
    onMove?: (id: number)=> void;
    visible: boolean;
    onChangeVisible: () => void;
}



const PlaceList: React.FC<PlaceListProps> = ({ places, onClick, onMove , visible, onChangeVisible}) => {

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
                onClick={() => console.log('Clicked place id:', place.id)}
                onMove={() => console.log('Moved place id:', place.id)}
            />
        ))}
        <CreatePlace onClick={onChangeVisible} />
      </div>
    );
}

export default PlaceList;
