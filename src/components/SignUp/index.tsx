// React
import React, { Suspense } from "react";

// Libraries
import classNames from "classnames";

// Components
import { Form } from "components/Form";

// Styles
import s from "./SignUp.module.scss";

// Lazy loaded components
const UserRegistered = React.lazy(() => import("components/UserRegistered"));

// Local interface
interface ISignUp {
  isRegistered: boolean;

  setIsRegistered: (isRegistered: boolean) => void;
}

export const SignUp = ({ setIsRegistered, isRegistered }: ISignUp) => {
  return (
    <section id="signup">
      <div className={classNames("container", s.signUpSection)}>
        {/* Title render logic */}
        <h2 className={classNames("headingText", s.title)}>
          {!isRegistered
            ? "Working with POST request"
            : "User successfully registered"}
        </h2>
        {/* Title render logic */}

        {/* Depending on the isRegistered status, we render the required component  */}
        {!isRegistered && <Form setIsRegistered={setIsRegistered} />}
        {isRegistered && (
          <Suspense fallback={<div>Загрузка...</div>}>
            <UserRegistered />
          </Suspense>
        )}
        {/* Depending on the isRegistered status, we render the required component  */}
      </div>
    </section>
  );
};
