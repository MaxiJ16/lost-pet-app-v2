// CSS
import css from "./index.css";

import { useState } from "react";

// LIBRARY
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

// HOOKS
import { useUserEmail, useUserToken, usePassId } from "hooks";

// LIB - APIS
import { createUser } from "lib/create-user";
import { loginToApi } from "lib/login";
import { Loader } from "ui/Loader";
import { Message } from "ui/Message";

// UI COMPONENTS
import { MainButton } from "ui/Buttons";
import { MainTextField } from "ui/TextField";

export function SignupUser() {
  const navigate = useNavigate();
  const [userToken, setUserToken] = useUserToken();
  const [userPass, setUserPass] = usePassId();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  // VALOR DEL EMAIL
  const [userEmail, setUserEmail] = useUserEmail();

  // CREAR USUARIO
  // SI EL USUARIO NO TIENE TOKEN, LO CREAMOS CON SIGNUP
  const signUp = async (e) => {
    e.preventDefault();
    setLoader(true);
    setError(null);
    // DATOS DEL FORMULARIO
    const fullname: string = e.target.fullname.value;
    const password: string = e.target.password.value;
    const repeatPassword = e.target.repeatPassword.value;

    // SI CONTRASEÑA Y REPETIR CONTRASEÑA COINCIDEN
    // 1 - SETEAMOS LA CONTRASEÑÁ
    // 2 - CREAMOS UN OBJETO CON LOS DATOS DEL USER Y CREAMOS USUARIO
    // 3 - SI SE CREA CON ÉXITO LO LOGUEAMOS PARA INICIAR SESIÓN Y GUARDAR SU TOKEN, SI NO SE CREA MOSTRAMOS UN ERROR
    if (password == repeatPassword && password !== undefined) {
      // SETEAMOS EL ID DE LA CONTRASEÑA
      const passId = nanoid(password.length);
      await setUserPass(passId);

      // CREAMOS EL USUARIO CON SU FULLANAME, EMAIL Y PASSWORD
      const objSignUp = { fullname, email: userEmail, password };
      const res = await createUser(objSignUp);

      // SI SE CREA CON ÉXITO
      if (res.message) {
        setLoader(false);
        setSuccess(`${res.message}, Iniciando sesión...`);

        // LO AUTENTICA PARA QUE INICIE SESIÓN
        setTimeout(async () => {
          const resLogin = await loginToApi(userEmail, password);
          if (resLogin.token) {
            // SI SE AUTENTICÓ CON ÉXITO SETEA EL TOKEN Y REDIRIGE A LA PÁGINA PRINCIPAL
            setUserToken(resLogin.token);
          }
        }, 2500);

        setTimeout(() => {
          navigate("/");
        }, 4000);
      }

      // SI EL USUARIO NO SE CREA CON ÉXITO MUESTRA EL ERROR
      if (res.error) {
        setLoader(false);
        setError(res.error);
      }
      // SI CONTRASEÑA Y REPETIR CONTRASEÑA "NO" COINCIDEN MUESTRA UN MENSAJE DE ERROR
    } else {
      setLoader(false);
      setError("Las contraseñas no coinciden");
    }
  };

  return (
    <form onSubmit={signUp} className={css.myData}>
      <MainTextField type="text" name="fullname">
        Nombre
      </MainTextField>
      <MainTextField type="password" name="password">
        Contraseña
      </MainTextField>
      <MainTextField type="password" name="repeatPassword">
        Repetir Contraseña
      </MainTextField>
      <MainButton>Guardar</MainButton>
      {loader && <Loader />}
      {error && <Message msg={error} clas={"error"} />}
      {success && <Message msg={success} clas={"success"} />}
    </form>
  );
}
