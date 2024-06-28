import { IonPage } from "@ionic/react";
import "./Accueil.scss";
import InputComponent from "../../components/input/InputComponent";

const Accueil : React.FC = () => {
    return (
        <IonPage className="accueil">
            <div className="accueil__header">
                <h1 className="accueil__header__title">
                    <p>
                        Commencez votre journée
                    </p>
                    <p>
                        en beauté!
                    </p>
                </h1>
                <InputComponent
                    type="text"
                    required={false}
                    className="accueil__header__search"
                    placeholder="Effectuez votre recherche"
                />
            </div>
            <div className="accueil__filter">

            </div>
            <div className="accueil__display-content">

            </div>
        </IonPage>
    )
}

export default Accueil;