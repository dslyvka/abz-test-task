// Libraries
import classNames from "classnames";

// Components
import { Logo } from "components/Logo";

// Styles
import s from "./Header.module.scss";

// Header component
export const Header = () => {
  return (
    <div className="container">
      <header className={s.header}>
        <a href="./" className={s.logo}>
          <Logo />
        </a>

        {/* Header buttons */}
        <div>
          <button className={classNames("btn", s.usersBtn, "forAnchor")}>
            <a href="#users" className="anchor">
              .
            </a>
            Users
          </button>
          <button className={classNames("btn", "forAnchor")}>
            <a href="#signup" className="anchor">
              .
            </a>
            Sign up
          </button>
        </div>
        {/* Header buttons */}
      </header>
    </div>
  );
};
