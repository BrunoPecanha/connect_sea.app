import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface AssociationItem {
  id: number;
  descricao: string;
  selecionado?: boolean;
  cancelado: boolean;
  data: Date;
}

@Component({
  selector: 'app-association-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './association-modal.component.html',
  styleUrls: ['./association-modal.component.scss']
})
export class AssociationModalComponent {

  @Input() visible = false;
  @Input() titulo = 'Associar registros';
  @Input() itens: AssociationItem[] = [];

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<number[]>();

  cancelar(): void {
    this.close.emit();
  }

  salvar(): void {
    const ids = this.itens
      .filter(x => x.selecionado)
      .map(x => x.id);

    this.save.emit(ids);
  }
}