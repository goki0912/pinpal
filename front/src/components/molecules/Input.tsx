interface InputProps {
  name: string;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({name, register, ref,...rest}) => {
  return (
    <div className="m-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">{name}</label>
      <input 
      type="text" 
      ref={ref}
      id="small-input" 
      name={name} 
      {...register(name)}
      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
      {...rest}
      />
    </div>
  );
};

export default Input;
