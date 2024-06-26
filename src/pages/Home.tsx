import { IonPage } from '@ionic/react';
import './Home.scss';
import ArrowButton from './home/ArrowButton';
import ImageBubble from './home/components/ImageBubble';

const Home: React.FC = () => {
  const folderImg = "src/assets/imgs/";

  const bubbleData = [
    {
      className: "landing__display__box landing__display__box--three",
      image: folderImg + "im3.jpg"
    },
    {
      className: "landing__display__box landing__display__box--four",
      image: folderImg + "im4.jpg"
    },
    {
      className: "landing__display__box landing__display__box--five",
      image: folderImg + "im2.jpg"
    },
    {
      className: "landing__display__box landing__display__box--six",
      image: folderImg + "im6.jpg"
    },
    {
      className: "landing__display__box landing__display__box--seven",
      image: folderImg + "im5.jpg"
    }
  ]

  return (
    <IonPage className="landing">
      <div className="landing__display">
          <ImageBubble
            imageSrc={folderImg + "im1.jpg"}
            className="landing__display__box landing__display__box--one"
          />

          <div className="landing__display__box landing__display__box--two"> 
              <h3 className="landing__display__box landing__display__box--two__title">
                Breezy
              </h3>
          </div>
          
          {bubbleData.map((item, index) => (
            <ImageBubble
              key={index}
              className={item.className}
              imageSrc={item.image}
            />
          ))}
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
