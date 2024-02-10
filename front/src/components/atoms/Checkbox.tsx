import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


interface CheckboxProps {
    onClick: () => void;
    color?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({onClick, color = '#6938D3'}) => {
    return (
        <FontAwesomeIcon
            className="text-2xl" //今後、サイズ変更必要
            icon={faCheckCircle} 
            onClick={onClick}
            style={{ color: color, cursor: 'pointer', pointerEvents: 'none' }} // pointerEvents: 'none' でクリック不可に
        /> 
    );
};

export default Checkbox;