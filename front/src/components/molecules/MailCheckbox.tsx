import Checkbox from '../atoms/Checkbox';

interface MailCheckboxProps {
  onClick: () => void;
  show?: boolean;
  // checkboxが非活性化されているので、色を変化させる処理も必要
}

const MailCheckbox: React.FC<MailCheckboxProps>= ({onClick,show}) => {
  return (
    <div className="m-5 flex">
      <Checkbox onClick={onClick} color={show? '#6938D3': '#CCCCCC'} data-show={show}/>
      <p className='pl-2'>候補日を入力して招待メールを送る</p>
    </div>
  );
};

export default MailCheckbox;