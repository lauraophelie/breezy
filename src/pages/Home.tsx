import { IonPage } from '@ionic/react';
import './Home.scss';
import ArrowButton from './home/ArrowButton';

const Home: React.FC = () => {
  return (
    <IonPage className="landing">
      <div className="landing__display">
          <div className="landing__display__box landing__display__box--one"> </div>
          <div className="landing__display__box landing__display__box--two"> 
              <h3 className="landing__display__box landing__display__box--two__title">
                Breezy
              </h3>
          </div>
          <div className="landing__display__box landing__display__box--three"> </div>
          <div className="landing__display__box landing__display__box--four"> </div>
          <div className="landing__display__box landing__display__box--five"> </div>
          <div className="landing__display__box landing__display__box--six"> </div>
          <div className="landing__display__box landing__display__box--seven"> </div>
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
