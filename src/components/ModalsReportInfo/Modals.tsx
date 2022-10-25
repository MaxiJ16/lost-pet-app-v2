import { InfoPetForm } from "components/InfoPetForm";
import { useModal } from "hooks/useModal";
import { LinkText } from "ui/Texts";
import { Modal } from "./Modal";

export function Modals({dataPet}) {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <div>
      <a onClick={openModal as any}>
        <LinkText page="home">REPORTAR INFORMACIÓN</LinkText>
      </a>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <InfoPetForm dataPet={dataPet}/>
      </Modal>
    </div>
  );
}
