import { IonPage } from "@ionic/react";
import "./Login.scss";
import InputComponent from "../../components/input/InputComponent";

const Login : React.FC = () => {
    return (
        <IonPage className="login">
            <div className="login__display">
                <div className="login__display__box login__display__box--one">

                </div>
                <div className="login__display__box login__display__box--two">

                </div>
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
            </div>
        </IonPage>
    )
}

export default Login;