import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Accueil from "../../pages/accueil/Accueil";
import { Route } from "react-router";
import { cart, home, wallet } from "ionicons/icons";
import Panier from "../../pages/panier/Panier";
import Portefeuille from "../../pages/portefeuille/Portefeuille";
import "./Footer.scss";

const Footer : React.FC = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/accueil" render={() => <Accueil />} exact={true} />
                    <Route path="/panier" render={() => <Panier />} exact={true} />
                    <Route path="/portefeuille" render={() => <Portefeuille />} exact={true} />
                </IonRouterOutlet>

                <IonTabBar slot="bottom" className="footer">
                    <IonTabButton tab="acceuil" href="/accueil">
                        <IonIcon icon={home} />
                    </IonTabButton>

                    <IonTabButton tab="panier" href="/panier">
                        <IonIcon icon={cart} />
                    </IonTabButton>

                    <IonTabButton tab="portefeuille" href="/portefeuille">
                        <IonIcon icon={wallet} />
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}

export default Footer;