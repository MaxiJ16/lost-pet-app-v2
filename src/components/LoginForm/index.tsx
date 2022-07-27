import { useNavigate, Link } from "react-router-dom";

import { MainButton } from "ui/Buttons";
import { MainTextField } from "ui/TextField";
import { LinkText } from "ui/Texts";

import css from "./index.css";

export function AuthForm() {
  // navigate es un hook de react-router-dom, y me lleva a otra ruta sin problemas
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    // le decimos que queremos ir a /search/elproductoquebuscamos
    // navigate(`/search/${query}`, { replace: true });
    navigate(`/auth/password`, { replace: true });
    console.log(email);
  };
  return (
    <form onSubmit={handleSubmit} className={css["login-form"]}>
      <MainTextField type="text" name="email">
        Email
      </MainTextField>
      <MainButton>Siguiente</MainButton>
    </form>
  );
}

export function PasswordForm() {
  // navigate es un hook de react-router-dom, y me lleva a otra ruta sin problemas
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    // le decimos que queremos ir a /search/elproductoquebuscamos
    // navigate(`/search/${query}`, { replace: true });
    console.log(password);
  };
  return (
    <form onSubmit={handleSubmit} className={css["login-form"]}>
      <MainTextField type="text" name="password">
        Contraseña
      </MainTextField>
      <LinkText>Olvidé mi contraseña</LinkText>
      <MainButton>Ingresar</MainButton>
    </form>
  );
}
