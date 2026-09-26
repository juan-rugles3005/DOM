import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { happyOutline, heartOutline, starOutline, thumbsUpOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonChip,
  IonLabel,

} from '@ionic/angular';

@Component({
  selector: 'app-icon',
  templateUrl: 'icon.page.html',
  styleUrls: ['icon.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonIcon,
    IonChip,
    IonLabel,

  ],
})
export class IconPage {
  constructor() {
    addIcons({ happyOutline, heartOutline, starOutline, thumbsUpOutline });
  }
}
