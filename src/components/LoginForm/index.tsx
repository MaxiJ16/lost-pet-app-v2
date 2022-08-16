import css from "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainButton } from "ui/Buttons";
import { MainTextField } from "ui/TextField";
import { Loader } from "ui/Loader";
import { checkEmail } from "lib/login";
import { useUserEmail } from "hooks";

export function AuthForm() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useUserEmail();
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoader(true);
    const email = e.target.email.value;
    // seteamos al átomo de email
    setUserEmail(email);
    // Chequeamos que el email exista con la api
    const res = await checkEmail(email);
    // Si el email existe, pasa a password. Si no existe a Mis Datos, para registrarse
    if (res) {
      setLoader(false);
      navigate(`/auth/password`);
    } else {
      navigate(`/my-data`);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={css["login-form"]}>
      <MainTextField type="email" name="email">
        Email
      </MainTextField>
      <MainButton>Siguiente</MainButton>
      {loader && <Loader />}
    </form>
  );
}
