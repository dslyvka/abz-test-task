// Components
import { UserRegisteredSvg } from "./UserRegisteredSvg";

// Styles
import s from "./UserRegistered.module.scss";

// User registered component
const UserRegistered = () => {
  return (
    <div className={s.container}>
      <UserRegisteredSvg />
    </div>
  );
};

export default UserRegistered;
