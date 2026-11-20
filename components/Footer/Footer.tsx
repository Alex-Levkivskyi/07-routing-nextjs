import css from "./Footer.module.css";

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {CURRENT_YEAR} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Oleksandr Levkivskyi</p>
          <p>
            Contact us:{" "}
            <a href="mailto:student@notehub.app">student@notehub.app</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
