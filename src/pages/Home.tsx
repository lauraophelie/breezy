import { IonPage } from '@ionic/react';
import './Home.scss';
import ArrowButton from './home/ArrowButton';

const Home: React.FC = () => {
  return (
    <IonPage className="landing">
      <div className="landing__display">

      </div>
      <div className="landing__getting-started">
        <h1 className="landing__getting-started--title">
          <p>
            Fresh Starts
          </p>
          <p>
            Every Morning
          </p>
        </h1>

        <ArrowButton />
      </div>
    </IonPage>
  );
};

export default Home;
