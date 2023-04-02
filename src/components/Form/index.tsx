import { useState, useEffect } from "react";

// Libraries
import { Formik } from "formik";

// Api
import { getToken } from "API/getToken";
import { signUp } from "API/SignUp";

// Validation schema
import { SignUpSchema } from "validation/SignUpSchema";

// Components
import { InputText } from "./InputText";
import { Positions } from "./Positions";
import { InputFile } from "./InputFile";
import { Spinner } from "components/Spinner";

// Styles
import s from "./Form.module.scss";
import classNames from "classnames";

// Local interface
interface IForm {
  // Needed to display that user registred
  setIsRegistred: (isRegistred: boolean) => void;
}

export const Form = ({ setIsRegistred }: IForm) => {
  // Checking that file is valid for form validation
  const [isFileValid, setIsFileValid] = useState(false);
  // Token for registration
  const [token, setToken] = useState("");
  // isLoading status for spinner
  const [isLoading, setIsLoading] = useState(false);

  // When componnet is mounted we getting token which is needed to signup a user
  useEffect(() => {
    getToken().then((data) => setToken(data.token));
  }, []);

  // Submit form and signup new user
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // FormData
    const form = new FormData(e.currentTarget);

    // Set isLoading to true to display spinner
    setIsLoading(true);

    const res = await signUp(token, form);
    if (res.success) {
      // Set isRegistred to true to display that user is signed up
      setIsRegistred(true);

      // Set isLoading to false to remove spinner
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        // Text tinputs default values
        name: "",
        email: "",
        phone: "",
      }}
      validationSchema={SignUpSchema}
      validateOnBlur
      onSubmit={() => {}}
    >
      {({ errors, touched, isValid, values, handleChange, handleBlur }) => (
        <form className={s.form} onSubmit={onSubmit}>
          {/* Text inputs */}
          <div className={s.inputsContainer}>
            {/* Name */}
            <InputText
              label="Your name"
              name="name"
              value={values.name}
              error={errors.name && touched.name ? errors.name : ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* Name */}

            {/* Email */}
            <InputText
              label="Email"
              name="email"
              value={values.email}
              error={errors.email && touched.email ? errors.email : ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* Email */}

            {/* Phone */}
            <InputText
              label="Phone"
              name="phone"
              value={values.phone}
              error={errors.phone && touched.phone ? errors.phone : ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* Phone */}
          </div>
          {/* Text inputs */}

          {/* Positions (radio buttons) */}
          <Positions />
          {/* Positions (radio buttons) */}

          {/* Input type file */}
          <InputFile onBlur={handleBlur} setIsFileValid={setIsFileValid} />
          {/* Input type file */}

          {/* Submit button */}
          <button
            type="submit"
            className={classNames("btn", s.signUpButton)}
            // Logic for disabling button
            // Button is not disabled when all inputs are valid
            // Button could be disabled when we SignUp new user and request has status pending
            disabled={
              !isValid ||
              (Object.keys(touched).length === 0 &&
                touched.constructor === Object) ||
              !isFileValid ||
              isLoading
            }
          >
            Sign up
            {/* Spinner rendering logic which displayed when we SignUp new user and request has status pending*/}
            {isLoading && <Spinner />}
            {/* Spinner rendering logic which displayed when we SignUp new user and request has status pending*/}
          </button>
          {/* Submit button */}
        </form>
      )}
    </Formik>
  );
};
