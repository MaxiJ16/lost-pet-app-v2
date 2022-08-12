import { Title } from "ui/Texts";
import css from "./index.css";

import { EditPetForm } from "components/EditPetForm";

export function EditPets() {
  return (
    <section className={css.edit}>
      <Title>Editar Mascota Perdida</Title>
      <EditPetForm />
    </section>
  );
}
