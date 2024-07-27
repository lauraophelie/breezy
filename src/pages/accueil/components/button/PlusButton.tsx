import { IonIcon } from "@ionic/react";
import "./PlusButton.scss";
import { add } from "ionicons/icons";

interface ArrowButtonProps {
    className?: string;
    onClick?: (event: any) => void;
}

const PlusButton : React.FC<ArrowButtonProps> = (props) => {
    return (
        <div 
            className={"plus-button " + props.className}
            onClick={props.onClick}
        >
            <IonIcon
                icon={add}
                className="plus-button__icon"
            />
        </div>
    )
}

export default PlusButton;