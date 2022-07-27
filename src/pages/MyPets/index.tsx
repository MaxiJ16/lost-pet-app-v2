import { MyDataForm } from "components/MyDataForm";
import { Title } from "ui/Texts";
import css from "./index.css"

export function MyPets(){
  return (
    <section className={css.myPet}>
      <Title>Mis Mascotas Reportadas</Title>
      <MyDataForm/>
    </section>
  )
}