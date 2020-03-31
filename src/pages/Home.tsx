import { IonContent,
   IonHeader, 
   IonPage, 
   IonTitle, 
   IonToolbar, 
   IonButton,
   IonList,
   IonItem,
   useIonViewDidEnter,
   useIonViewDidLeave,
   useIonViewWillEnter,
   useIonViewWillLeave } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';


const Home: React.FC = () => {

  useIonViewDidEnter(() => {
    console.log('ionViewDidEnter event fired');
  });

  useIonViewDidLeave(() => {
    console.log('ionViewDidLeave event fired');
  });

  useIonViewWillEnter(() => {
    console.log('ionViewWillEnter event fired');
  });

  useIonViewWillLeave(() => {
    console.log('ionViewWillLeave event fired');
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
