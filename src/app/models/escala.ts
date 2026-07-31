import { EscalaStatusEnum } from "../enums/escala-status.enum";

export interface Escala {
  id: number;
  navio: string;
  porto: string;
  status: EscalaStatusEnum;
  eta: string;
  etb?: string;
  etd?: string;
}