import { PoSelectOption } from '@po-ui/ng-components';
import { EnumValues } from 'enum-values';

export enum Aplicacao {
  'Compra' = 0,
  'Venda' = 1,
  'Ambos' = 2
}

export function AplicacaoToSelectOption(): Array<PoSelectOption> {
  const result: Array<PoSelectOption> = new Array<PoSelectOption>();
  EnumValues.getValues(Aplicacao).forEach(obj => {
    const op = {
      label: '',
      value: 0
    };
    op.label = EnumValues.getNameFromValue(Aplicacao, obj);
    op.value = Number(obj);
    result.push(op);
  });
  return result;
}
