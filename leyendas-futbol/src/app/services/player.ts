import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { Player, PlayerSearchResponse } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php';

  private readonly leyendas = [
    'Ronaldo Nazario',
    'Diego Maradona',
    'Lionel Messi',
    'Cristiano Ronaldo',
    'Zinedine Zidane',
    'Ronaldinho',
    'Johan Cruyff',
    'Franz Beckenbauer',
    'Thierry Henry',
    'Kaka',
    'David Beckham'
  ];

  getLeyendas(): Observable<Player[]> {
    const requests = this.leyendas.map(nombre => {
      const nombreUrl = nombre.replace(/ /g, '_');
      return this.http.get<PlayerSearchResponse>(`${this.apiUrl}?p=${nombreUrl}`).pipe(
        map(res => res.player?.[0])
      );
    });

    return forkJoin(requests).pipe(
      map(resultados => resultados.filter((p): p is Player => !!p))
    );
  }
}