import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { menuOutline } from 'ionicons/icons';
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
  IonActionSheet,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: 'action-sheet.page.html',
  styleUrls: ['action-sheet.page.scss'],
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
    IonActionSheet,
    IonButton,
  ],
})
export class ActionSheetPage {
  constructor() {
    addIcons({ menuOutline });
  }
}
