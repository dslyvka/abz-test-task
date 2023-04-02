// Libraries
import classNames from "classnames";

// Components
import { Form } from "components/Form";
import { UserRegistred } from "components/UserRegistred";

// Styles
import s from "./SignUp.module.scss";

// Local interface
interface ISignUp {
  isRegistred: boolean;

  setIsRegistred: (isRegistred: boolean) => void;
}

export const SignUp = ({ setIsRegistred, isRegistred }: ISignUp) => {
  return (
    <section>
      <div className={classNames("container", s.signUpSection)}>
        {/* Title render logic */}
        <h2 className={classNames("headingText", s.title)}>
          {!isRegistred
            ? "Working with POST request"
            : "User successfully registered"}
        </h2>
        {/* Title render logic */}

        {/* Depending on the isRegistred status, we render the required component  */}
        {!isRegistred && <Form setIsRegistred={setIsRegistred} />}
        {isRegistred && <UserRegistred />}
        {/* Depending on the isRegistred status, we render the required component  */}
      </div>
    </section>
  );
};
