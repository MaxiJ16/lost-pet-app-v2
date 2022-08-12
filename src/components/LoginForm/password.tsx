import css from "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { loginToApi } from "lib/login";
import { newPassword } from "lib/forgotten-password";
import { MainTextField } from "ui/TextField";
import { LinkText, SubtitleBold } from "ui/Texts";
import { MainButton } from "ui/Buttons";
import { Loader } from "ui/Loader";
import { Message } from "ui/Message";
import { useUserEmail, useUserToken, usePassId } from "hooks";

export function PasswordForm() {
  const [userEmail, setUserEmail] = useUserEmail();
  const [userToken, setUserToken] = useUserToken();
  const [userPass, setUserPass] = usePassId();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // navigate es un hook de react-router-dom, y me lleva a otra ruta sin problemas
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoader(true);
    setError(null);
    e.preventDefault();
    const password = e.target.password.value;
    // Respuesta de la api
    const res = await loginToApi(userEmail, password);

    // Si devuelve el token
    if (res.token) {
      setLoader(false);
      setSuccess("Logueado con éxito!");
      // GUARDAMOS LA NUEVA PASSID
      const passId = nanoid(password.length);
      await setUserPass(passId);
      await setUserToken(res.token);

      setTimeout(() => {
        navigate("/");
      }, 2500);
    }
    // Si devuelve el error
    if (res.error) {
      setLoader(false);
      setError(res.error);
    }
  };

  const forgottenPassword = async (e) => {
    e.preventDefault();
    setLoader(true);
    setError(null);
    // CREAMOS LA CONTRASEÑA TEMPORARIA CON NANOID
    const temporaryPassword = nanoid(6);
    console.log(temporaryPassword);
    // LA SETEAMOS
    const data = { email: userEmail, password: temporaryPassword };
    const resTemporaryPassword = await newPassword(data);
    // SI NOS DEVUELVE UN 1 ES PORQUE LA CONTRASEÑA SE SETEO CORRECTAMENTE
    if (resTemporaryPassword.resNewPass[0] == 1) {
      setLoader(false);
      setSuccess(resTemporaryPassword.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css["login-form-pass"]}>
      <SubtitleBold>
        Email: <span className={css.userEmail}>{userEmail}</span>{" "}
      </SubtitleBold>
      <MainTextField type="password" name="password">
        Contraseña
      </MainTextField>
      <a onClick={forgottenPassword}>
        <LinkText page="login">Olvidé mi contraseña</LinkText>
      </a>
      <MainButton>Ingresar</MainButton>
      {loader && <Loader />}
      {error && <Message msg={error} clas={"error"} />}
      {success && <Message msg={success} clas={"success"} />}
    </form>
  );
}
