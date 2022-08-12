import { PasswordForm } from "components/LoginForm/password";
import { Title } from "ui/Texts";
import css from "./index.css";

export function Password() {
  return (
    <section className={css.auth}>
      <Title>Ingresar</Title>
      <PasswordForm />
    </section>
  );
}
