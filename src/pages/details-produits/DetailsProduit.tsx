import { IonIcon, IonPage } from "@ionic/react";
import "./details-produit.scss";
import { arrowBackOutline, cartOutline } from "ionicons/icons";
import ImageBox from "../../components/image/ImageBox";
import QuantiteSetting from "../../components/quantite-setting/QuantiteSetting";
import BackHeader from "../../components/back-header/BackHeader";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Produit } from "../accueil/interface/produit";
import axios from "axios";
import { environment } from "../../routes/environment";

const DetailsProduit: React.FC = () => {
    const location = useLocation<{id: string}>();
    const [quantite, setQuantite] = useState<number>(1);
    const [produit, setProduit] = useState<Produit>();

    useEffect(() => {
        const fetchDetailsProduit = async(idProduit: string) => {
            try {
                const response = await axios.get(`${environment.apiUrl}/produits/${idProduit}`);
                if(response.data.data) {
                    setProduit(response.data.data);
                } else if (response.data.error) {
                    console.error(response.data.error);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchDetailsProduit(location.state.id);
    });

    return (
        <IonPage className="details-produits">
            <BackHeader title={"Détails"} />

            <div className="details-produits__display__image">
                <ImageBox
                    src={`${environment.apiUrl}/uploads/${produit?.pathImage}`}
                    alt="Produit image"
                    className="details-produits__display__image--source"
                />
            </div>
            <div className="details-produits__content">
                <div className="details-produits__content__header">
                    <p className="details-produits__content__header--title">
                        { produit?.nomProduit }
                    </p>
                    <p className="details-produits__content__header--sub">
                        { "Ar " + produit?.prix }
                    </p>
                </div>
                <div className="details-produits__content__main">
                    <p className="details-produits__content__main--title">
                        Description
                    </p>
                    <p className="details-produits__content__main--content">
                        { produit?.description }
                    </p>
                </div>
                <div className="details-produits__content__footer">
                    <div className="details-produits__content__footer--text">
                        <p className="details-produits__content__footer--text">
                            Total prix :
                        </p>
                        <p className="details-produits__content__footer--text">
                            { "Ar " + produit?.prix }
                        </p>
                    </div>
                    <div className="details-produits__content__footer--price">
                        <QuantiteSetting quantite={quantite} />
                    </div>
                </div>
            </div>
            <div className="details-produits">
                <IonIcon 
                    icon={cartOutline}
                />
                Ajouter { quantite } au panier
            </div>
        </IonPage>
    );
}

export default DetailsProduit;