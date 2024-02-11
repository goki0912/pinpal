import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface PlaceProps {
    onClick: () => void;
}

const CreatePlace: React.FC<PlaceProps> = ({onClick}) => {
  return (
    <div className="flex items-center text-purple-300 h-1 m-2 p-8 rounded-lg border-2" onClick={onClick} style={{color:'#6938D3',border: '2px solid #6938D3' }} >
      <div className="w-full flex justify-center">
        <FontAwesomeIcon
            className="text-2xl" //今後、サイズ変更必要
            icon={faPlus} />
        </div>
    </div>
  );
};

export default CreatePlace;