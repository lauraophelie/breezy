import { IonPage } from "@ionic/react";
import "./Login.scss";
import InputComponent from "../../components/input/InputComponent";
import Bouton from "../../components/button/Bouton";

import { IMG_BUBBLE_DATA_FOLDER } from "../../config/constants";
import ImageBubble from "../home/components/ImageBubble";

const Login : React.FC = () => {
    const folderImg = IMG_BUBBLE_DATA_FOLDER;

    const bubbleData = [
        {
            image: folderImg + "im7.jpg",
            className: "login__display__box login__display__box--one"
        },
        {
            image: folderImg + "im8.jpg",
            className: "login__display__box login__display__box--two"
        }
    ];

    return (
        <IonPage className="login">
            <div className="login__display">
                {bubbleData.map((item, index) => (
                    <ImageBubble
                        key={index}
                        className={item.className}
                        imageSrc={item.image}
                    />
                ))}
            </div>
            
            <div className="login__content">
                <h1 className="login__content__title">
                    Log In
                </h1>
                <p className="login__content__subtitle">
                    Connectez-vous à votre compte
                </p>
                <InputComponent 
                    type={"text"} 
                    required={true}     
                    placeholder="Numéro de téléphone"           
                />
                <Bouton
                    text="Se connecter"
                    className="login__content__submit-button"
                />
            </div>
        </IonPage>
    )
}

export default Login;