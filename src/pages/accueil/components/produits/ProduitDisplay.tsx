import ImageBox from "../../../../components/image/ImageBox";
import PlusButton from "../button/PlusButton";
import "./ProduitDisplay.scss";

interface ProduitDisplayProps {
    nomProduit: string;
    prix: number;
    image: string;
    className?: string;
    onClick?: (event: any) => void;
}

const ProduitDisplay : React.FC<ProduitDisplayProps> = (props) => {
    return (
        <div className={"produit-display " + props.className}>
            <div className="produit-display__image">
                <ImageBox
                    src={props.image}
                    className="produit-display__image--source"
                />
            </div>
            <div className="produit-display__content">
                <p className="produit-display__content--name">
                    {props.nomProduit}
                </p>
                <p className="produit-display__content--price">
                    {"Ar " + props.prix}
                </p>
            </div>
            <PlusButton 
                className="produit-display__cart-button"
                onClick={props.onClick}
            />
        </div>
    )
}

export default ProduitDisplay;