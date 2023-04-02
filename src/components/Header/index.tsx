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
          <button className={classNames("btn", s.usersBtn)}>Users</button>
          <button className="btn">Sign up</button>
        </div>
        {/* Header buttons */}
      </header>
    </div>
  );
};
