import css from "./index.css";
import { Caption } from "ui/Texts";

// TEXT FIEL LOGIN

type loginProps = {
  type: string;
  name: string;
  children: string;
  placeholder?;
  value?;
};

export function MainTextField(props: loginProps) {
  const { type, name, children, placeholder, value } = props;

  return (
    <div>
      <label>
        <Caption>{children}</Caption>
      </label>

      <input
        type={type}
        name={name}
        className={css.login}
        placeholder={placeholder}
        defaultValue={value}
        required
      ></input>
    </div>
  );
}
