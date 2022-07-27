import { MyDataForm } from "components/MyDataForm";
import { Title } from "ui/Texts";
import css from "./index.css"

export function MyData(){
  return (
    <section className={css.data}>
      <Title>Mis Datos</Title>
      <MyDataForm/>
    </section>
  )
}