import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Escala } from '../../models/escala';
import { EscalaService } from '../../services/escala.service';
import { EscalaStatusEnum } from '../../enums/escala-status.enum';

@Component({
  selector: 'app-escalas',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './escalas.html',
  styleUrl: './escalas.scss',
})
export class Escalas implements OnInit {

  escalas: Escala[] = [];

  totalPages = 0;
  loading = false;

  page = 1;
  pageSize = 5;

  EscalaStatus = EscalaStatusEnum;

  constructor(private escalaService: EscalaService, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadEscalas();
  }

  loadEscalas(): void {

    this.loading = true;

    this.escalaService
      .getPaged(this.page, this.pageSize)
      .subscribe({
        next: result => {
          this.escalas = result.data;
          this.totalPages = Math.ceil(result.totalItems / this.pageSize);
          this.cd.detectChanges();
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          this.loading = false;
        }
      });
  }

  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadEscalas();
    }
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadEscalas();
    }
  }

  getStatusDescricao(status: EscalaStatusEnum): string {
    switch (status) {
      case EscalaStatusEnum.Prevista:
        return 'PREVISTA';
      case EscalaStatusEnum.Cancelada:
        return 'CANCELADA';
      case EscalaStatusEnum.Saiu:
        return 'SAIU';
      case EscalaStatusEnum.Atracada:
        return 'ATRACADA';
      default:
        return '';
    }
  }

  getStatusClass(status: EscalaStatusEnum): string {
    switch (status) {
      case EscalaStatusEnum.Prevista:
        return 'status-prevista';
      case EscalaStatusEnum.Cancelada:
        return 'status-cancelada';
      case EscalaStatusEnum.Saiu:
        return 'status-saiu';
      case EscalaStatusEnum.Atracada:
        return 'status-atracada';
      default:
        return '';
    }
  }
}