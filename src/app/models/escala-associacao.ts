import { EscalaStatusEnum } from "../enums/escala-status.enum";

export interface EscalaAssociacao {
  id: number;
  porto: string;
  selecionado: boolean
  cancelado: boolean
}