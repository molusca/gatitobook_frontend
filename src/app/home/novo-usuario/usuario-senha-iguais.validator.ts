import { FormGroup } from "@angular/forms";

export function usuarioSenhaIguais(form: FormGroup): { [key: string]: any } | null {
  const username = form.get('userName')?.value;
  const password = form.get('password')?.value;

  if (username && password) {
    return username.trim() === password.trim() ? { usuarioSenhaIguais: true } : null;
  }

  return null;
}
