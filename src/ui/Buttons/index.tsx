import { BodyBold } from "ui/Texts";

import css from "./index.css";

export function MainButton({ children }) {
  return (
    <button className={css.main}>
      <BodyBold>{children}</BodyBold>
    </button>
  );
}

export function GreenButon({ children }) {
  return (
    <button className={css.green}>
      <BodyBold>{children}</BodyBold>
    </button>
  );
}

export function RedButton({ children }) {
  return (
    <button className={css.red}>
      <BodyBold>{children}</BodyBold>
    </button>
  );
}

export function GreyButton({ children }) {
  return (
    <button className={css.grey}>
      <BodyBold>{children}</BodyBold>
    </button>
  );
}
