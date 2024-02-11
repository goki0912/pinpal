import React, { useState } from 'react';
// import DatePicker from '../molecules/DatePicker';
import CreatePlace from '../molecules/CreatePlace';
import Title from '../molecules/Title';
import Input from '../molecules/Input';
import MailCheckbox from '../molecules/MailCheckbox';
import GroupMenu from '../molecules/GroupMenu';
import Button from '../atoms/Button';
import { useGroups } from '@/hooks/useGroups';
import Autocomplete from '@/components/molecules/AutoComplete';
import { useForm, Controller } from "react-hook-form";
// import { useCreatePlace } from '@/hooks/useCreatePlaces';
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { PlacesPost } from '@/types/placesPost';
import { createPlace } from '@/pages/api/places';


interface CreatePlaceProps {
  changeVisible: () => void;
}

const CreatePlaceForm: React.FC<CreatePlaceProps> = ({ changeVisible }) => {
  const groups = useGroups();
  const { control, handleSubmit, getValues, setValue, register } = useForm<PlacesPost>();
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSelectPlace = (lat: number, lng: number) => {
    setLocation({ lat, lng });
  };

  const onSubmit = async (data: any, event: any) => {
    console.log(getValues());
    event.preventDefault()
    const group_id = getValues('group_id');
    setValue('latitude', location.lat);
    setValue('longitude', location.lng);
    setValue('group_id', group_id);
    setValue('status', 1);
    const formData = getValues();
    console.log(formData);
    await createPlace(formData); 
    changeVisible();
  };


  const handleDateChange = (dates: any) => {
    dates = dates.map((date: any) => date.format("YYYY-MM-DD"));
    setValue('date', dates);
    console.log(getValues());
  };

  const handleMailCheckboxClick = () => {
    setShowDatePicker(!showDatePicker);
    console.log(showDatePicker);
  };


  return (
    <div>
      <div className="flex items-center justify-between p-3">
        <Title title="Places I Want to Go" subtitle="行きたい場所をストックしよう！" />
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('name')} register={register} ref={inputRef} />
        <Autocomplete name="住所：Place address" form_name="address" onSelectPlace={handleSelectPlace} />
        <GroupMenu groups={groups} setValue={setValue}/>
        <MailCheckbox onClick={handleMailCheckboxClick} show={showDatePicker}/>
        {showDatePicker && (
          <Controller
            name="date" 
            control={control} 
            render={({ field: { onChange, name, value } }) => (
              <DatePicker 
                value={value}
                onChange={handleDateChange}
                multiple 
                inputClass="custom-input-size" 
                plugins={[<DatePanel />]} 
              />
            )}
          />
        )}
        <div className="w-full flex justify-center">
          <Button title="決定" />
        </div>
      </form>
    </div>
  );
}

export default CreatePlaceForm;
