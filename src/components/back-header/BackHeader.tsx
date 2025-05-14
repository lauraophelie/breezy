import { arrowBackOutline } from "ionicons/icons";
import "./back-header.scss";
import { IonIcon } from "@ionic/react";

interface BackHeaderProps {
    title: string;
}

const BackHeader: React.FC<BackHeaderProps> = (props) => {
    return (
        <div className="back-header">
            <IonIcon
                icon={arrowBackOutline}
                className="back-header__icon"
            />
            <h3 className="back-header__title">
                { props.title }
            </h3>
        </div>
    )
}

export default BackHeader;