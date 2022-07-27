import { MainButton } from "ui/Buttons";
import { MainTextField } from "ui/TextField";
import css from "./index.css"

export function MyDataForm(){
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const password = e.target.password.value
    const repeatPassword = e.target.repeatPassword.value
    
    console.log(name,password,repeatPassword  );
  }

  return(
    <form onSubmit={handleSubmit} className={css.myData}>
      <MainTextField type="text" name="name">Nombre</MainTextField>
      <MainTextField type="text" name="password">Contraseña</MainTextField>
      <MainTextField type="text" name="repeatPassword">Repetir Contraseña</MainTextField>
      <MainButton>Guardar</MainButton>
    </form>
  )
}