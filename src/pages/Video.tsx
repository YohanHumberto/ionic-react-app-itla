import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';

const Video: React.FC = () => {
  return (
    <IonPage>
      <Header name={"Video"} />
      <IonContent fullscreen>
        <div className="container row m-0 p-3 p-md-5">
          <div className='alert alert-success m-auto w-100 mb-5'>
            <div>
              <h4>Video explicativo</h4>
              <hr />
              <div style={{ border: "2px solid #198754", height: "95vh" }}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Y0F5-CwfVwA"
                  title="Ionic 5 + React aplicación práctica"
                  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Video;
