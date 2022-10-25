import css from "./index.css";

import { Title } from "ui/Texts";
import { AuthForm } from "components/LoginForm";

export function Auth() {
  return (
    <section className={css.auth}>
      <Title>Ingresar</Title>
      <AuthForm />
    </section>
  );
}
