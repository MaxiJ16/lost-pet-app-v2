import css from "./Modal.css";
import x from "assets/xBlack.png";

export function Modal({ children, isOpen, closeModal }) {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article
      className={`${css.modal} ${isOpen ? css["is-open"] : ""}`}
      onClick={closeModal}
    >
      <div
        className={css["modal-container"]}
        onClick={handleModalContainerClick}
      >
        <img src={x} className={css["modal-close"]} onClick={closeModal}/>
        {children}
      </div>
    </article>
  );
}
