import { ReportPetForm } from "components/ReportPetForm";
import { Title } from "ui/Texts";
import css from "./index.css";

export function ReportPet() {
  return (
    <section className={css.reportPet}>
      <Title>Reportar Mascota Perdida</Title>
      <ReportPetForm />
    </section>
  );
}
