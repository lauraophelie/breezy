import { IonPage } from "@ionic/react";
import "./Login.scss";
import InputComponent from "../../components/input/InputComponent";
import Bouton from "../../components/button/Bouton";

import { IMG_BUBBLE_DATA_FOLDER } from "../../config/constants";
import ImageBubble from "../home/components/ImageBubble";
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";
import { environment } from "../../routes/environment";

const Login : React.FC = () => {
    const folderImg = IMG_BUBBLE_DATA_FOLDER;
    const history = useHistory();
    const [login, setLogin] = useState({
        contact: ""
    });
    const [error, setError] = useState(null);
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    };

    const signin = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            const responseLogin = await axios.post(`${environment.apiUrl}/auth/login`, login);
            if(responseLogin.data.token) {
                const token = responseLogin.data.token;
                const contact = responseLogin.data.contact;

                localStorage.setItem("token", token);
                localStorage.setItem("contact", contact);

                history.push("/accueil");
            } else if (responseLogin.data.error) {
                setError(responseLogin.data.error);
                console.log(error);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const bubbleData = [
        {
            image: folderImg + "im7.jpg",
            className: "login__display__box login__display__box--one",
            onClick: () => history.push("/home")
        },
        {
            image: folderImg + "im8.jpg",
            className: "login__display__box login__display__box--two",
            onClick: () => history.push("/home")
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
                        onClick={item.onClick}
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
                    name="contact"
                    value={login.contact}
                    onChange={handleChange}         
                />
                <Bouton
                    text="Se connecter"
                    className="login__content__submit-button"
                    onClick={signin}
                />
            </div>
        </IonPage>
    )
}

export default Login;