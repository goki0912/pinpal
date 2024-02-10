interface ButtonProps {
    onClick: () => void;
    title: string;
}

const Button: React.FC<ButtonProps> = ({onClick,title}) => {
    return (
        <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-28 mx-auto" onClick={onClick}>{title}</button>
    );
};

export default Button;