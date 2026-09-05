import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../services/player';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-list.html',
  styleUrls: ['./player-list.css']
})
export class PlayerListComponent implements OnInit {
  private readonly playerService = inject(PlayerService);

  players: Player[] = [];
  loading = true;
  errorMessage: string | null = null;
  blockedIds = new Set<string>();

  private readonly positionTranslations: Record<string, string> = {
    'Attacking Midfield': 'Mediocampista Ofensivo',
    'Right Winger': 'Extremo Derecho',
    'Left Winger': 'Extremo Izquierdo',
    'Centre-Forward': 'Delantero Centro',
    'Forward': 'Delantero',
    'Manager': 'Director Técnico',
    'Defender': 'Defensa',
    'Midfielder': 'Mediocampista',
    'Goalkeeper': 'Guardameta',
    'Owner': 'Dirigente / Propietario',
    'Central Midfield': 'Mediocampista Central',
    'Defensive Midfield': 'Mediocampista Defensivo'
  };

  ngOnInit(): void {
    this.fetchPlayers();
  }

  fetchPlayers(): void {
    this.loading = true;
    this.errorMessage = null;

    this.playerService.getLeyendas().subscribe({
      next: (data: Player[]) => {
        this.players = data;
        this.loading = false;
      },
      error: (err: unknown) => {
        console.error('Error al obtener jugadores:', err);
        this.errorMessage = 'Hubo un error al cargar los jugadores. Intenta de nuevo.';
        this.loading = false;
      }
    });
  }

  toggleBlock(id: string): void {
    if (this.blockedIds.has(id)) {
      this.blockedIds.delete(id);
    } else {
      this.blockedIds.add(id);
    }
  }

  isBlocked(id: string): boolean {
    return this.blockedIds.has(id);
  }

  translatePosition(position: string): string {
    return this.positionTranslations[position] || position || 'Sin posición';
  }
}