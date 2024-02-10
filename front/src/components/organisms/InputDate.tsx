import Title from "../molecules/Title";
import Datepicker from "../molecules/Datepicker";
import Button from "../atoms/Button";

const InputDate: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Title title="Date" subtitle="候補日を入力しよう！" />
      <Datepicker />
      <Button title="決定" onClick={() => {} } />
    </div>
  );
};

export default InputDate;