import React from 'react';
import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  calculatorOutline, calculatorSharp, homeOutline, homeSharp,
  tabletLandscapeOutline, tabletLandscapeSharp, apertureSharp,
  apertureOutline, videocamSharp, videocamOutline
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Sumadora',
    url: '/page/Sumadora',
    iosIcon: calculatorOutline,
    mdIcon: calculatorSharp
  },
  {
    title: 'TablaMultiplicar',
    url: '/page/tabla-multiplicar',
    iosIcon: tabletLandscapeOutline,
    mdIcon: tabletLandscapeSharp
  },
  {
    title: 'Traductor',
    url: '/page/Traductor',
    iosIcon: apertureOutline,
    mdIcon: apertureSharp
  },
  {
    title: 'Video',
    url: '/page/Video',
    iosIcon: videocamOutline,
    mdIcon: videocamSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Tarea 3 - Ionic</IonListHeader>
          <IonNote>202010633@itla.edu.do</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
