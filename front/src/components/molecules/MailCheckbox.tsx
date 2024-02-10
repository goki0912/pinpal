import Checkbox from '../atoms/Checkbox';

interface MailCheckboxProps {
  onClick: () => void;
  // checkboxが非活性化されているので、色を変化させる処理も必要
}

const MailCheckbox: React.FC<MailCheckboxProps>= ({onClick}) => {
  return (
    <div className="mb-5 flex">
      <Checkbox onClick={onClick} color='#6938D3'/>
      <p className='pl-2'>候補日を入力して招待メールを送る</p>
    </div>
  );
};

export default MailCheckbox;