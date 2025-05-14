import { IonContent, IonPage, IonRefresher, IonRefresherContent, RefresherEventDetail } from "@ionic/react";
import "./Accueil.scss";
import InputComponent from "../../components/input/InputComponent";
import FilterButton from "./components/FilterButton";
import ProduitDisplay from "./components/produits/ProduitDisplay";
import { IMG_BUBBLE_DATA_FOLDER } from "../../config/constants";
import { useEffect, useState } from "react";
import { Categorie, Produit } from "./interface/produit";
import axios from "axios";
import { environment } from "../../routes/environment";
import { useHistory } from "react-router";

const Accueil : React.FC = () => {
    const folderImg = IMG_BUBBLE_DATA_FOLDER;

    const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
        console.log("refresh");
        setTimeout(() => {
            event.detail.complete();
        }, 2000);
    };
    const [categorie, setCategorie] = useState<Categorie[]>([]);
    const [produits, setProduits] = useState<Produit[]>([]);
    const history = useHistory();

    useEffect(() => {
        const fetchDataCategorie = async() => {
            try {
                const response = await axios.get(`${environment.apiUrl}/categorie`);
                if(response.data.data) {
                    setCategorie(response.data.data)
                } else if(response.data.error) {
                    console.error(response.data.error);
                }
            } catch (error) {
                console.error(error);
            }
        };
        const fetchDataProduits = async () => {
            try {
                const response = await axios.get(`${environment.apiUrl}/produits`);
                if(response.data.data) {
                    setProduits(response.data.data);
                } else if(response.data.error) {
                    console.error(response.data.error);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchDataCategorie();
        fetchDataProduits();
    });

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

                {categorie.map((item, index) => (
                    <FilterButton 
                        textContent={item.designationCategorie}
                        key={index}
                    />
                ))}
            </div>

                <div className="accueil__display-content">
                    {/* <IonRefresher 
                        slot="fixed" 
                        pullFactor={0.5} 
                        pullMin={100} 
                        pullMax={200} 
                        onIonRefresh={handleRefresh}
                    >
                        <IonRefresherContent> </IonRefresherContent>
                    </IonRefresher> */}

                    {produits.map((item, index) => (
                        <ProduitDisplay 
                            nomProduit={item.nomProduit} 
                            prix={item.prix} 
                            image={`${environment.apiUrl}/uploads/${item.pathImage}`} 
                            onClick={() => history.push({
                                pathname: "/detailsProduit",
                                state: { id: item._id }
                            })}
                            key={index}
                        />
                    ))}

                    {/* <ProduitDisplay 
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
                    /> */}
                </div>
        </IonPage>
    )
}

export default Accueil;