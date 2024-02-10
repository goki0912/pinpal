interface InputGroupNameProps {
  name: string;
}

const InputGroupName: React.FC<InputGroupNameProps> = ({name}) => {
  return (
    <div className="mb-5 w-full">
      <input type="text" id="small-input" name={name} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" placeholder="グループ名" value={"高校の友達"}></input>
    </div>
  );
}

export default InputGroupName;