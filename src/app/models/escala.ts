import { ManifestoResumo } from "./manifesto-resumo";

export interface Escala {
  id: number;
  navio: string;
  porto: string;
  status: number;
  eta: Date;
  etb?: Date;
  etd?: Date;

  manifestos: ManifestoResumo[];
}