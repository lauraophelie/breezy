import { IonPage } from "@ionic/react";
import "./Accueil.scss";
import InputComponent from "../../components/input/InputComponent";
import FilterButton from "./components/FilterButton";

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
                <FilterButton 
                    textContent="Tout"
                    id="acceuil__filter__one"
                />

                <FilterButton 
                    textContent="Fruits"
                />

                <FilterButton
                    textContent="Légumes"
                />

                <FilterButton
                    textContent="Boissons"
                />
            </div>
            <div className="accueil__display-content">

            </div>
        </IonPage>
    )
}

export default Accueil;