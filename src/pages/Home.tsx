import React from 'react';
import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';
import imgProfile2 from "../img/imgProfile2.jpg";

const Home: React.FC = () => {
    return (
        <IonPage>
            <Header name={"Home"} />
            <IonContent fullscreen>
                <div className="container mt-5 text-center">
                    <IonImg style={{ width: "200px", margin: "auto", borderRadius: "50px" }} src={imgProfile2} />
                    <h2>Yohan Humberto Rijo Astacio</h2>
                    <h3>202010633@itla.edu.do</h3>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
