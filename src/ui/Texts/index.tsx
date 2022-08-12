import css from "./index.css";

export function Title(props: {children: string}) {
  return <h1 className={css.title}>{props.children}</h1>;
}

export function Subtitle(props: {children: string}) {
  return <h2 className={css.subtitle}>{props.children}</h2>;
}

export function SubtitleBold(props: {children}) {
  return <h2 className={css.subtitleBold}>{props.children}</h2>;
}

export function BodyText(props: {children: string}) {
  return <h4 className={css.body}>{props.children}</h4>;
}

export function BodyBold(props: {children}) {
  return <h4 className={css.bodyBold}>{props.children}</h4>;
}

export function Caption(props: {children: string}) {
  return <h4 className={css.caption}>{props.children}</h4>;
}

export function LinkText(props: {children: string, page?}) {
  return <h4 className={css[`link-${props.page}`]}>{props.children}</h4>;
}
