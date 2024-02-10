interface InputProps {
  name: string;
  form_name: string;
}

const Input: React.FC<InputProps> = ({name,form_name}) => {
  return (
    <div className="m-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">{name}</label>
      <input type="text" id="small-input" name={form_name} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"></input>
    </div>
  );
};

export default Input;