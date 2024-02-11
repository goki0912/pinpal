import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


interface CheckboxProps {
    onClick: () => void;
    color?: string;
    disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({onClick, color = '#FFFFFF',disabled=false}) => {
    return (
        <FontAwesomeIcon
            className="text-2xl z-50 relative" //今後、サイズ変更必要
            icon={faCheckCircle} 
            onClick={!disabled ? onClick : undefined} 
            style={{ color: color, cursor: 'pointer',pointerEvents: disabled ? 'none' : 'auto',}} // pointerEvents: 'none' でクリック不可に
        /> 
    );
};

export default Checkbox;