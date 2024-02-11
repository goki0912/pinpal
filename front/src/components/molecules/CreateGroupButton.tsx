import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface GroupProps {
    onClick: () => void;
}

const CreateGroupButton: React.FC<GroupProps> = ({onClick}) => {
  return (
    <div className="flex items-center text-purple-300 h-1 m-2 p-3 rounded-lg border-2" onClick={onClick} style={{color:'#76838F',border: 'none' }} >
      <div className="w-full flex justify-center">
        <FontAwesomeIcon
            className="text-xl" //今後、サイズ変更必要
            icon={faPlus} />
        </div>
    </div>
  );
}

export default CreateGroupButton;