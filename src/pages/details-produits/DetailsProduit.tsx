import { IonIcon, IonPage } from "@ionic/react";
import "./details-produit.scss";
import { arrowBackOutline, cartOutline } from "ionicons/icons";
import ImageBox from "../../components/image/ImageBox";
import QuantiteSetting from "../../components/quantite-setting/QuantiteSetting";
import BackHeader from "../../components/back-header/BackHeader";
import { useLocation } from "react-router";
import { useState } from "react";

const DetailsProduit: React.FC = () => {
    const location = useLocation<{id: string}>();
    const [quantite, setQuantite] = useState(1);

    return (
        <IonPage className="details-produits">
            <BackHeader title={"Détails"} />

            <div className="details-produits__display__image">
                <ImageBox
                    src="/"
                    alt="Produit image"
                    className="details-produits__display__image--source"
                />
            </div>
            <div className="details-produits__content">
                <div className="details-produits__content__header">
                    <p className="details-produits__content__header--title">
                        Title
                    </p>
                    <p className="details-produits__content__header--sub">
                        Prix
                    </p>
                </div>
                <div className="details-produits__content__main">
                    <p className="details-produits__content__main--title">
                        Description
                    </p>
                    <p className="details-produits__content__main--content">
                        Description du contenu
                    </p>
                </div>
                <div className="details-produits__content__footer">
                    <div className="details-produits__content__footer--text">
                        <p className="details-produits__content__footer--text">
                            Total prix :
                        </p>
                        <p className="details-produits__content__footer--text">
                            Ar 20 000
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