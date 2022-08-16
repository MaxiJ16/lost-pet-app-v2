import css from "./index.css";

import { useState } from "react";
// LIBRARY
import { nanoid } from "nanoid";

// HOOKS
import { useUserToken, usePassId, useUserData } from "hooks";

// LIB - APIS
import { modifiedUser } from "lib/modify-user";

// UI COMPONENTS
import { MainButton } from "ui/Buttons";
import { MainTextField } from "ui/TextField";
import { Loader } from "ui/Loader";
import { Message } from "ui/Message";

export function ModifyUser() {
  const [userToken, setUserToken] = useUserToken();
  const [userPass, setUserPass] = usePassId();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  // De userData extraemos el fullname para poder rellenar el formulario
  const fullnameUserData = useUserData().fullname;

  // MODIFICAR USUARIO
  const modifyUser = async (e) => {
    e.preventDefault();
    setLoader(true);
    setError(null);
    // DATOS DEL FORMULARIO
    const fullname: string = e.target.fullname.value;
    const password: string = e.target.password.value;
    const repeatPassword = e.target.repeatPassword.value;

    if (password !== repeatPassword) {
      setLoader(false);
      setError("Las contraseñas no coinciden");
    }

    if (password == userPass && fullname == fullnameUserData) {
      setLoader(false);
      setError("No cambiaste ningún dato");
    }

    // SI LAS CONTRASEÑAS COINCIDEN
    if (
      password == repeatPassword &&
      password !== undefined &&
      password !== userPass
    ) {
      // GUARDAMOS LA NUEVA PASSID
      const passId = nanoid(password.length);
      await setUserPass(passId);

      // CREAMOS EL OBJ CON LOS DATOS PARA MODIFICAR EL USUARIO
      const userModifiedData = { fullname, password };
      const updateUserData = await modifiedUser(userModifiedData, userToken);

      if (updateUserData.exito) {
        setLoader(false);
        setSuccess("Usuario modificado con éxito");
      }
    }
  };

  return (
    <form onSubmit={modifyUser} className={css.myData}>
      <MainTextField type="text" name="fullname" value={fullnameUserData}>
        Nombre
      </MainTextField>
      <MainTextField type="password" name="password" value={userPass}>
        Contraseña
      </MainTextField>
      <MainTextField type="password" name="repeatPassword" value={userPass}>
        Repetir Contraseña
      </MainTextField>
      <MainButton>Guardar</MainButton>
      {loader && <Loader />}
      {error && <Message msg={error} clas={"error"} />}
      {success && <Message msg={success} clas={"success"} />}
    </form>
  );
}
