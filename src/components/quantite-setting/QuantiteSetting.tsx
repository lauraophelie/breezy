import { IonIcon } from "@ionic/react";
import "./quantite-setting.scss";
import { addSharp } from "ionicons/icons";

interface QuantiteSettingProps {
    quantite: number;
    theme?: string;
}

const QuantiteSetting: React.FC<QuantiteSettingProps> = (props) => {
    return (
        <div className="quantite-setting">
            <span className="quantite-setting__button">
                <IonIcon 
                    icon={addSharp}
                />
            </span>
            <span className="quantite-setting__text">
                { props.quantite }
            </span>
            <span className="quantite-setting__button">
                <IonIcon 
                    icon={addSharp}
                />
            </span>
        </div>
    )
}

export default QuantiteSetting;