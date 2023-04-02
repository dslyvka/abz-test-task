// Components
import { UserRegistredSvg } from "./UserRegistredSvg";

// Styles
import s from "./UserRegistred.module.scss";

// User registred component
export const UserRegistred = () => {
  return (
    <div className={s.container}>
      <UserRegistredSvg />
    </div>
  );
};
