import { IonContent, IonPage, IonRefresher, IonRefresherContent, RefresherEventDetail } from "@ionic/react";
import "./Accueil.scss";
import InputComponent from "../../components/input/InputComponent";
import FilterButton from "./components/FilterButton";
import ProduitDisplay from "./components/produits/ProduitDisplay";
import { IMG_BUBBLE_DATA_FOLDER } from "../../config/constants";

const Accueil : React.FC = () => {
    const folderImg = IMG_BUBBLE_DATA_FOLDER;

    const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
        console.log("refresh");
        setTimeout(() => {
            event.detail.complete();
        }, 2000);
    }

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
                    defaultClick={2}
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
                    <IonRefresher 
                        slot="fixed" 
                        pullFactor={0.5} 
                        pullMin={100} 
                        pullMax={200} 
                        onIonRefresh={handleRefresh}
                    >
                        <IonRefresherContent> </IonRefresherContent>
                    </IonRefresher>


                    <ProduitDisplay 
                        nomProduit={"Pancakes"} 
                        prix={20000} 
                        image={folderImg + "im2.jpg"}  
                    />  

                    <ProduitDisplay 
                        nomProduit={"Pancakes"} 
                        prix={20000} 
                        image={folderImg + "im2.jpg"}   
                    />

                    <ProduitDisplay 
                        nomProduit={"Pancakes"} 
                        prix={20000} 
                        image={folderImg + "im2.jpg"}  
                    />  

                    <ProduitDisplay 
                        nomProduit={"Pancakes"} 
                        prix={20000} 
                        image={folderImg + "im2.jpg"}   
                    />
                </div>
        </IonPage>
    )
}

export default Accueil;