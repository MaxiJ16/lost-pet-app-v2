import { MainButton } from "ui/Buttons";
import { Caption, Title } from "ui/Texts";
import css from "./index.css";

export function Home() {
  return (
    <section className={css.home}>
      <Title>Mascotas perdidas cerca tuyo</Title>

      <div className={css["container-form"]}>
        <Caption>
          Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
          conocer tu ubicación.
        </Caption>
        <MainButton>Dar mi ubicación</MainButton>
      </div>
    </section>
  );
}
