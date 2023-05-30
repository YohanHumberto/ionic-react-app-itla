import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

interface  params{
    name: string
}
const Header: React.FC<params> = (props) => {
    return (
        <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{ props.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
  };

export default Header;