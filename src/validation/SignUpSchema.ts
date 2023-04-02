// Libraries
import * as Yup from "yup";

// Regex for email according to RFC2822
const emailRegExp =
  // eslint-disable-next-line no-control-regex
  /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

// Regex for phone number
// All ukranian numbers
// Number must start from +380 or 380 (+ is optional)
const phoneNumberRegExp = /^\+{0,1}380([0-9]{9})$/;

// SignUp form validation schema
export const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(60, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .matches(emailRegExp, "Enter valid email according to RFC 2822")
    .required("Required"),
  phone: Yup.string()
    .matches(
      phoneNumberRegExp,
      "Number should start with code of Ukraine +380 where + is optional"
    )
    .required("Required"),
});
