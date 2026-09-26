import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { reorderFourOutline } from 'ionicons/icons';
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
  IonList,
  IonItem,
} from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
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
    IonList,
    IonItem,
  ],
})
export class ListPage {
  constructor() {
    addIcons({ reorderFourOutline });
  }
}
