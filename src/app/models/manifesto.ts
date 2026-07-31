import { ManifestoTipoEnum } from "../enums/manifesto-tipo.enum";

export interface Manifesto {
  id: number;
  numero: string;
  tipo: ManifestoTipoEnum;
  navio: string;
  portoOrigem: string;
  portoDestino: string;
}