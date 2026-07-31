import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Manifesto } from '../../models/manifesto';
import { ManifestoService } from '../../services/manifesto.service';
import { ChangeDetectorRef } from '@angular/core';
import { ManifestoTipoEnum } from '../../enums/manifesto-tipo.enum';

@Component({
  selector: 'app-manifestos',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './manifestos.html',
  styleUrl: './manifestos.scss'
})
export class Manifestos implements OnInit {

  manifestos: Manifesto[] = [];
  totalPages = 0;
  loading = false;
  page = 1;
  pageSize = 2;

  ManifestoTipo = ManifestoTipoEnum;

  constructor(private manifestoService: ManifestoService, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadManifestos();
  }

  loadManifestos(): void {
    this.loading = true;

    this.manifestoService
      .getPaged(this.page, this.pageSize)
      .subscribe({
        next: result => {
          this.manifestos = result.data;
          this.totalPages = Math.ceil(result.totalItems / this.pageSize);
          this.cd.detectChanges();
        },
        error: err => console.error(err),
        complete: () => this.loading = false
      });
  }

   nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadManifestos();
    }
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadManifestos();
    }
  }
}