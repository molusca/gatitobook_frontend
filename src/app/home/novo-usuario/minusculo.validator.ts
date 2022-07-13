import { AbstractControl } from "@angular/forms";

export function minusculoValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const valor = control.value as string;
  if (valor !== valor.toLowerCase()) {
    return { minusculo: true };
  } else {
    return null;
  }
}
