import css from "./index.css";

export function Message({ msg, clas }) {
  return (
    <div className={css[`message-${clas}`]}>
      <p>{msg}</p>
    </div>
  );
}
