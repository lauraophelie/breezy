import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from 'ionicons/icons';
import "./ArrowButton.scss";

interface ArrowButtonProps {
    onClick?: (event: any) => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = (props) => {
    return (
        <div className="arrow-button" onClick={props.onClick}>
            <IonIcon 
                icon={arrowForwardOutline}
                className="arrow-button__icon"
            />
        </div>
    )
}

export default ArrowButton;