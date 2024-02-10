interface TitleProps {
    title: string;
    subtitle: string;
}

const Title: React.FC<TitleProps> = ({title, subtitle}) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl">{title}</h1>
            <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
    );
};

export default Title;