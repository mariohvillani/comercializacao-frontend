import { PoSelectOption } from '@po-ui/ng-components';
import { EnumValues } from 'enum-values';

export enum Tipo {
  'Preço Calculado' = 0,
  'Preço Proposto' = 1,
  'Informativo' = 2,
  'Margem' = 3
}

export function TipoToSelectOption(): Array<PoSelectOption> {
  const result: Array<PoSelectOption> = new Array<PoSelectOption>();
  EnumValues.getValues(Tipo).forEach(obj => {
    const op = {
      label: '',
      value: 0
    };
    op.label = EnumValues.getNameFromValue(Tipo, obj);
    op.value = Number(obj);
    result.push(op);
  });
  return result;
}
