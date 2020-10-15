import { PoSelectOption } from '@po-ui/ng-components';
import { EnumValues } from 'enum-values';

export enum Moeda {
  'BRL' = 0,
  'USD' = 1
}

export function MoedaToSelectOption(): Array<PoSelectOption> {
  const result: Array<PoSelectOption> = new Array<PoSelectOption>();
  EnumValues.getValues(Moeda).forEach(obj => {
    const op = {
      label: '',
      value: 0
    };
    op.label = EnumValues.getNameFromValue(Moeda, obj);
    op.value = Number(obj);
    result.push(op);
  });
  return result;
}
