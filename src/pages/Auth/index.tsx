import css from "./index.css";

import { Title } from "ui/Texts";
import { AuthForm, PasswordForm } from "components/LoginForm";

export function Auth() {
  return (
    <section className={css.auth}>
      <Title>Ingresar</Title>
      <AuthForm />
    </section>
  );
}

export function Password() {
  return (
    <section className={css.auth}>
      <Title>Ingresar</Title>
      <PasswordForm />
    </section>
  );
}
