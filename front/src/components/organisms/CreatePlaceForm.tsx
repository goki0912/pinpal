import DatePicker from '../molecules/DatePicker';
import CreatePlace from '../molecules/CreatePlace';
import Title from '../molecules/Title';
import Input from '../molecules/Input';
import MailCheckbox from '../molecules/MailCheckbox';
import GroupMenu from '../molecules/GroupMenu';
import Button from '../atoms/Button';
import { useGroups } from '@/hooks/useGroups';

interface CreatePlaceProps {
    onClick: () => void;
}

const CreatePlaceForm: React.FC<CreatePlaceProps> = ({onClick}) => { 
  const groups  = useGroups();
  
  return (
      <div>
        <div className="flex items-center justify-between p-3">
          <Title title="Places I Want to Go" subtitle="行きたい場所をストックしよう！" />
        </div>     
        <hr></hr>
        <Input name="場所：Place name" form_name="name" />
        <Input name="住所：Place address" form_name="address" />
        <GroupMenu groups={groups} />
        <MailCheckbox onClick={()=>console.log("aaa")}/>
        <DatePicker />
        <div className="w-full flex justify-center">
          <Button onClick={onClick} title="決定"/>
        </div>
      </div>
    );
}

export default CreatePlaceForm;