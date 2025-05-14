import "./facture-panier.scss";

const FacturePanier: React.FC = () => {
    return (
        <div className="facture-panier">
            <div className="facture-panier__content">
                <p className="facture-panier__content__text">
                    Total article(s)
                </p>
                <p className="facture-panier__content__text">
                    Ar 00 000
                </p>
            </div>
            <div className="facture-panier__content">
                <div className="facture-panier__content__text">
                    Remise
                </div>
                <div className="facture-panier__content__text">
                    Ar 00 000
                </div>
            </div>
            <div className="facture-panier__total">
                <p className="facture-panier__total__text">
                    Total
                </p>
                <p className="facture-panier__total__text">
                    Ar 00 000
                </p>
            </div>
        </div>
    )
}

export default FacturePanier;