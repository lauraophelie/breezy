import "./Bouton.scss";

interface BoutonProps {
    text: string;
    onClick?: (event: any) => void;
    className?: string;
    id?: string;
}

const Bouton : React.FC<BoutonProps> = (props) => {
    return (
        <button
            className={"bouton " + props.className}
            onClick={props.onClick}
            id={props.id}
        >
            {props.text}
        </button>
    )
}

export default Bouton;