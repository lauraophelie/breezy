import { IonIcon } from "@ionic/react";
import ImageBox from "../../../../components/image/ImageBox";
import QuantiteSetting from "../../../../components/quantite-setting/QuantiteSetting";
import "./element-panier.scss";
import { exitOutline } from "ionicons/icons";

interface ElementPanierProps {
    imageProduit: string;
    nomProduit: string;
    quantitePanier: number;
    prixTotal: number;
}

const ElementPanier: React.FC<ElementPanierProps> = (props) => {
    return (
        <div className="panier__element">
            <ImageBox 
                src={props.imageProduit}
                alt="Image produit"
                className="panier__element--image"
            />

            <div className="panier__element--content">
                <div className="panier__element--content__produit">
                    <p className="panier__element--content__produit">
                        { props.nomProduit }
                    </p>
                    <p className="panier__element--content__produit">
                        { "Ar " + props.prixTotal }
                    </p>
                </div>
                <div className="panier__element--content__setting">
                    <QuantiteSetting quantite={1} />

                    <div className="panier__element--content__setting--remove">
                        <IonIcon
                            icon={exitOutline}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElementPanier;