import { SimNao } from './../enums/sim-nao.enum';
import { Aplicacao } from './../enums/aplicacao.enum';
import { Tipo } from './../enums/tipo.enum';
import { Moeda } from './../enums/moeda.enum';
import { UnidadeMedida } from './../enums/unidade-medida.enum';

export class Componente {
  id: number;
  codigo: string;
  descricao: string;
  codigoExterno: string;
  tabela: string;
  unidadeMedida: UnidadeMedida;
  moeda: Moeda;
  tipo: Tipo;
  aplicacao: Aplicacao;
  ativo: SimNao;
  hedge: SimNao;
}
