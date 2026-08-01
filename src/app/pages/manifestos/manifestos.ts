import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Manifesto } from '../../models/manifesto';
import { ManifestoService } from '../../services/manifesto.service';
import { ChangeDetectorRef } from '@angular/core';
import { ManifestoTipoEnum } from '../../enums/manifesto-tipo.enum';
import { Escala } from '../../models/escala';
import { AssociationItem, AssociationModalComponent } from './modals/association-modal.component';
import { EscalaService } from '../../services/escala.service';


@Component({
  selector: 'app-manifestos',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    AssociationModalComponent
  ],
  templateUrl: './manifestos.html',
  styleUrl: './manifestos.scss'
})
export class Manifestos implements OnInit {

  manifestos: Manifesto[] = [];
  registros: AssociationItem[] = [];
  totalPages = 0;
  loading = false;
  page = 1;
  pageSize = 2;
  successMessage = '';

  ManifestoTipo = ManifestoTipoEnum;

  showAssociationModal = false;
  selectedManifesto?: Manifesto;

  constructor(private manifestoService: ManifestoService, private cd: ChangeDetectorRef, private escalaService: EscalaService) {
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

  editarRegistros(manifesto: Manifesto) {
    this.selectedManifesto = manifesto;

    this.escalaService.getDetails(manifesto.id).subscribe({
      next: result => {

        this.registros = result.map(x => ({
          id: x.id,
          descricao: x.porto,
          selecionado: x.selecionado,
          cancelado: x.cancelado,
          data: x.data
        }));

        this.showAssociationModal = true;
      },
      error: err => console.error(err)
    });
  }

  fecharModal() {
    this.showAssociationModal = false;
  }

  salvarAssociacoes(ids: number[]) {
    if (!this.selectedManifesto) {
      return;
    }

    this.manifestoService
      .updateEscalas(this.selectedManifesto.id, ids)
      .subscribe({
        next: () => {
          this.showAssociationModal = false;

          this.successMessage = `${ids.length} escalas vinculadas com sucesso!`;
          this.cd.detectChanges();

          setTimeout(() => {
            this.successMessage = '';
            this.cd.detectChanges();
          }, 3000);
        },
        error: err => console.error(err)
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