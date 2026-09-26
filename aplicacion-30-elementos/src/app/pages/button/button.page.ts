import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { radioButtonOnOutline } from 'ionicons/icons';
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
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: 'button.page.html',
  styleUrls: ['button.page.scss'],
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
    IonButton,
  ],
})
export class ButtonPage {
  constructor() {
    addIcons({ radioButtonOnOutline });
  }
}
