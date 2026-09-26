import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { optionsOutline } from 'ionicons/icons';
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
  IonRange,
  IonItem,
} from '@ionic/angular';

@Component({
  selector: 'app-range',
  templateUrl: 'range.page.html',
  styleUrls: ['range.page.scss'],
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
    IonRange,
    IonItem,
  ],
})
export class RangePage {
  constructor() {
    addIcons({ optionsOutline });
  }
}
