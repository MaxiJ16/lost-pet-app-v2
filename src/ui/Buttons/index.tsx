import { BodyBold } from "ui/Texts";
import css from "./index.css";

export function MainButton(props: { children; Click? }) {
  const handleClick = () => {
    if (props.Click) {
      props.Click();
    }
  };
  return (
    <button className={css.main} onClick={handleClick}>
      <BodyBold>{props.children}</BodyBold>
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
