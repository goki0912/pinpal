import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';


const Date=() => {
  return (
    <div>
      <input type="date" />
      <FontAwesomeIcon
        className="text-2xl"
        icon={faCalendar} 
        style={{ color: '#979797' }}/>
    </div>
    );
};

export default Date;