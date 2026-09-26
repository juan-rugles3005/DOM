import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircleOutline, albumsOutline, alertCircleOutline, browsersOutline, calendarOutline, chatboxOutline, chatbubbleEllipsesOutline, checkboxOutline, chevronDownCircleOutline, createOutline, ellipseOutline, gridOutline, happyOutline, hourglassOutline, imageOutline, layersOutline, listOutline, menuOutline, navigateOutline, optionsOutline, personCircleOutline, pricetagOutline, pricetagsOutline, radioButtonOnOutline, readerOutline, reorderFourOutline, searchOutline, swapHorizontalOutline, syncOutline, toggleOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonIcon,
  IonLabel,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonIcon,
    IonLabel,
  ],
})
export class HomePage {
  constructor() {
    addIcons({ addCircleOutline, albumsOutline, alertCircleOutline, browsersOutline, calendarOutline, chatboxOutline, chatbubbleEllipsesOutline, checkboxOutline, chevronDownCircleOutline, createOutline, ellipseOutline, gridOutline, happyOutline, hourglassOutline, imageOutline, layersOutline, listOutline, menuOutline, navigateOutline, optionsOutline, personCircleOutline, pricetagOutline, pricetagsOutline, radioButtonOnOutline, readerOutline, reorderFourOutline, searchOutline, swapHorizontalOutline, syncOutline, toggleOutline });
  }
}
