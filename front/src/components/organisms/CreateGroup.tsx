import Title from "../molecules/Title";
import Email from "../molecules/Email";
import Button from "../atoms/Button";
import ColorPicker from "../../hooks/ColorPicker";
import InputGroupName from "../molecules/InputGroupName";


interface CreateGroupProps {
  title: string;
  subtitle: string;
}

const CreateGroup: React.FC<CreateGroupProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col">
      <Title title={title} subtitle={subtitle} />
      <div className="flex gap-x-4 mx-6">
        <ColorPicker />
        <InputGroupName name="家族と" />
      </div>
      {Array.from({ length:8 }).map((_, i) => (
        <Email key={i} />
      ))}
      <Button title="決定" onClick={() => {}} />
    </div>
  );
};
export default CreateGroup;