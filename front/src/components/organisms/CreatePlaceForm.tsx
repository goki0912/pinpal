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
  onClick: () => void;
}

const CreatePlaceForm: React.FC<CreatePlaceProps> = ({ onClick }) => {
  const groups = useGroups();
  const { control, handleSubmit, getValues, setValue, register } = useForm<PlacesPost>();

  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  console.log(location);

  const handleSelectPlace = (lat: number, lng: number) => {
    setLocation({ lat, lng });
  };

  const onSubmit = async (data: any) => {
    // getValuesを使用して、react-hook-formから最新のフォームデータを取得
    const formData = getValues();
    console.log(formData);
    await createPlace(formData); 
  };


  const handleDateChange = (dates: any) => {
    dates = dates.map((date: any) => date.format("YYYY-MM-DD"));
    setValue('date', dates);
  };
  console.log(register('name'));

  return (
    <div>
      <div className="flex items-center justify-between p-3">
        <Title title="Places I Want to Go" subtitle="行きたい場所をストックしよう！" />
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ok */}
        <Input {...register('name')} register={register} />
        {/* no */}
        <Autocomplete name="住所：Place address" form_name="address" onSelectPlace={handleSelectPlace} />
        {/* ok */}
        {/* <GroupMenu groups={groups} onChange={handleChange}/> */}
        <MailCheckbox onClick={() => console.log("aaa")} />
        {/* no */}
        {/* <DatePicker /> */}
        <Controller
        name="date" 
        control={control} 
        render={({
          field: { onChange, name, value },
        }) => (
          <DatePicker 
            value={value}
            onChange={handleDateChange}
            multiple 
            inputClass="custom-input-size" 
            plugins={[<DatePanel />]} 
          />
        )}
      />
        <div className="w-full flex justify-center">
          <Button onClick={onClick} title="決定" />
        </div>
      </form>
    </div>
  );
}

export default CreatePlaceForm;
