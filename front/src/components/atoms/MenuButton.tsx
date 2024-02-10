interface MenuButtonProps {
    onClick: () => void;
}

const Button: React.FC<MenuButtonProps> = ({onClick}) => {
    return (
        <div className="flex items-center justify-center w-9 h-8 bg-gray-100 rounded-lg pb-2 shadow-lg border border-gray-300">
            <span className="text-lg text-gray-500">...</span>
        </div>
    );
};

export default Button;