import React, { useState } from 'react';
import DatePicker from '../molecules/DatePicker';
import CreatePlace from '../molecules/CreatePlace';
import Title from '../molecules/Title';
import Input from '../molecules/Input';
import MailCheckbox from '../molecules/MailCheckbox';
import GroupMenu from '../molecules/GroupMenu';
import Button from '../atoms/Button';
import { useGroups } from '@/hooks/useGroups';
import Autocomplete from '@/components/molecules/AutoComplete';
import { useForm } from "react-hook-form";
import { useCreatePlace } from '@/hooks/useCreatePlaces';


interface CreatePlaceProps {
  onClick: () => void;
}

const CreatePlaceForm: React.FC<CreatePlaceProps> = ({onClick}) => { 
  const groups  = useGroups();

  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  console.log(location);

  const handleSelectPlace = (lat: number, lng: number) => {
    setLocation({ lat, lng });
  };

  const {
    handleChange, 
    handleSubmitCreate,
  } = useCreatePlace();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  return (
      <div>
        <div className="flex items-center justify-between p-3">
          <Title title="Places I Want to Go" subtitle="行きたい場所をストックしよう！" />
        </div>     
        <hr></hr>
        <form onSubmit={handleSubmit(handleSubmitCreate)}>
          {/* ok */}
          <Input name="場所：Place name" form_name="name" onChange={handleChange}/> 
          {/* no */}
          <Autocomplete name="住所：Place address" form_name="address" onSelectPlace={handleSelectPlace} />
          {/* ok */}
          <GroupMenu groups={groups} onChange={handleChange}/>
          <MailCheckbox onClick={()=>console.log("aaa")}/>
          {/* no */}
          <DatePicker />
          <div className="w-full flex justify-center">
            <Button onClick={onClick} title="決定"/>
          </div>
        </form>
    </div>
  );
}

export default CreatePlaceForm;
