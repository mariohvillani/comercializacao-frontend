import { PoSelectOption } from '@po-ui/ng-components';
import { EnumValues } from 'enum-values';

export enum UnidadeMedida {
  'Saca' = 0,
  'Tonelada' = 1,
  'Bushel' = 2,
  'Quilo' = 3
}

export function UnidadeMedidaToSelectOption(): Array<PoSelectOption> {
  const result: Array<PoSelectOption> = new Array<PoSelectOption>();
  EnumValues.getValues(UnidadeMedida).forEach(obj => {
    const op = {
      label: '',
      value: 0
    };
    op.label = EnumValues.getNameFromValue(UnidadeMedida, obj);
    op.value = Number(obj);
    result.push(op);
  });
  return result;
}
