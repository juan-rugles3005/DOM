import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { checkboxOutline } from 'ionicons/icons';
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
  IonCheckbox,
  IonItem,
} from '@ionic/angular';

@Component({
  selector: 'app-checkbox',
  templateUrl: 'checkbox.page.html',
  styleUrls: ['checkbox.page.scss'],
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
    IonCheckbox,
    IonItem,
  ],
})
export class CheckboxPage {
  constructor() {
    addIcons({ checkboxOutline });
  }
}
