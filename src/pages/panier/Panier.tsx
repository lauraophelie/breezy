import { IonPage } from "@ionic/react";
import BackHeader from "../../components/back-header/BackHeader";
import "./Panier.scss";
import ElementPanier from "./components/element-panier/ElementPanier";
import FacturePanier from "./components/facture-panier/FacturePanier";
import ValiderPanier from "./components/valider-panier/ValiderPanier";

const Panier : React.FC = () => {
    return (
        <IonPage className="panier">
            <BackHeader title={"Panier"} />

            <div className="panier__content">
                <ElementPanier 
                    imageProduit={""} 
                    nomProduit={""} 
                    quantitePanier={0} 
                    prixTotal={0} 
                />
            </div>

            <div className="panier__facture">
                <FacturePanier />
            </div>

            <div className="panier__validation">
                <ValiderPanier />
            </div>
        </IonPage>
    )
}

export default Panier;