import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


interface LocationIconProps {
    color?: string;
}

const LocationIcon: React.FC<LocationIconProps> = ({color = '#FFFFFF'}) => {
    return (
        <FontAwesomeIcon
            className="text-2xl" //今後、サイズ変更必要
            icon={faMapMarkerAlt} 
            style={{ color: color, cursor: 'pointer', pointerEvents: 'none' }} // pointerEvents: 'none' でクリック不可に
        /> 
    );
};

export default LocationIcon;