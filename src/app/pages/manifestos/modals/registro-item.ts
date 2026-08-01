export interface RegistroItem {
  id: number;
  descricao: string;
  selecionado?: boolean;
  cancelado: boolean;
  data: Date;
}