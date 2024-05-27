import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from 'ionicons/icons';
import "./ArrowButton.scss";

const ArrowButton: React.FC = () => {
    return (
        <div className="arrow-button">
            <IonIcon 
                icon={arrowForwardOutline}
                className="arrow-button__icon"
            />
        </div>
    )
}

export default ArrowButton;