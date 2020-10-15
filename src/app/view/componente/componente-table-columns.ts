import { SimNao } from './../../enums/sim-nao.enum';
import { Aplicacao } from './../../enums/aplicacao.enum';
import { Tipo } from './../../enums/tipo.enum';
import { Moeda } from './../../enums/moeda.enum';
import { UnidadeMedida } from './../../enums/unidade-medida.enum';
import { PoTableColumn, PoTableColumnLabel } from '@po-ui/ng-components';

export class ComponenteTableColumns {
  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'codigo',
      label: 'Código',
      type: 'string'
    },
    {
      property: 'descricao',
      label: 'Descrição',
      type: 'string'
    },
    {
      property: 'unidadeMedida',
      label: 'Unidade Medida',
      type: 'label',
      labels: [
        {
          value: UnidadeMedida.Saca,
          color: 'color-11',
          label: 'Saca',
          tooltip: 'Saca'
        },
        {
          value: UnidadeMedida.Tonelada,
          color: 'color-11',
          label: 'Tonelada',
          tooltip: 'Tonelada'
        },
        {
          value: UnidadeMedida.Bushel,
          color: 'color-11',
          label: 'Bushel',
          tooltip: 'Bushel'
        },
        {
          value: UnidadeMedida.Quilo,
          color: 'color-11',
          label: 'Quilo',
          tooltip: 'Quilo'
        }
      ] as Array<PoTableColumnLabel>
    },
    {
      property: 'moeda',
      label: 'Moeda',
      type: 'label',
      labels: [
        {
          value: Moeda.BRL,
          color: 'color-11',
          label: 'Real',
          tooltip: 'Real'
        },
        {
          value: Moeda.USD,
          color: 'color-11',
          label: 'Dolar',
          tooltip: 'Dolar'
        }
      ] as Array<PoTableColumnLabel>
    },
    {
      property: 'codigoExterno',
      label: 'Código Externo',
      type: 'string'
    },
    {
      property: 'tipo',
      label: 'Tipo',
      type: 'label',
      labels: [
        {
          value: Tipo['Preço Calculado'],
          color: 'color-11',
          label: 'Preço Calculado',
          tooltip: 'Preço Calculado'
        },
        {
          value: Tipo['Preço Proposto'],
          color: 'color-11',
          label: 'Preço Proposto',
          tooltip: 'Preço Proposto'
        },
        {
          value: Tipo.Margem,
          color: 'color-11',
          label: 'Margem',
          tooltip: 'Margem'
        },
        {
          value: Tipo.Informativo,
          color: 'color-11',
          label: 'Informativo',
          tooltip: 'Informativo'
        },
      ] as Array<PoTableColumnLabel>
    },
    {
      property: 'tabela',
      label: 'Tabela',
      type: 'string'
    },
    {
      property: 'aplicacao',
      label: 'Aplicação',
      type: 'label',
      labels: [
        {
          value: Aplicacao.Compra,
          color: 'color-11',
          label: 'Compra',
          tooltip: 'Compra'
        },
        {
          value: Aplicacao.Venda,
          color: 'color-11',
          label: 'Venda',
          tooltip: 'Venda'
        },
        {
          value: Aplicacao.Ambos,
          color: 'color-11',
          label: 'Ambos',
          tooltip: 'Ambos'
        }
      ] as Array<PoTableColumnLabel>
    },
    {
      property: 'ativo',
      label: 'Ativo',
      type: 'label',
      labels: [
        {
          value: SimNao.Sim,
          color: 'color-11',
          label: 'Sim',
          tooltip: 'Sim'
        },
        {
          value: SimNao.Não,
          color: 'color-11',
          label: 'Não',
          tooltip: 'Não'
        },
      ] as Array<PoTableColumnLabel>
    },
    {
      property: 'hedge',
      label: 'Hedge',
      type: 'label',
      labels: [
        {
          value: SimNao.Sim,
          color: 'color-11',
          label: 'Sim',
          tooltip: 'Sim'
        },
        {
          value: SimNao.Não,
          color: 'color-11',
          label: 'Não',
          tooltip: 'Não'
        },
      ] as Array<PoTableColumnLabel>
    },
  ];

}
