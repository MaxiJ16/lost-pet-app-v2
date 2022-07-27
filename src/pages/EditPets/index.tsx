import { MyDataForm } from "components/MyDataForm";
import { Title } from "ui/Texts";
import css from "./index.css"

export function EditPets(){
  return (
    <section className={css.edit}>
      <Title>Editar Mascota Perdida</Title>
      <MyDataForm/>
    </section>
  )
}