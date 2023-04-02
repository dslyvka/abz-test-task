// Libraries
import classNames from "classnames";

// Styles
import s from "./InputText.module.scss";

// Local interface
interface IInput {
  label: string;
  name: string;
  value: string;
  error?: string;

  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any, Element>) => void;
}

export const InputText = (props: IInput) => {
  const {
    label,

    name,
    value,
    error = "",
    onChange,
    onBlur,
  } = props;

  return (
    <div className={classNames(s.container, name !== "phone" && s.margin)}>
      {/* Input type text */}
      <input
        placeholder=" "
        type="text"
        name={name}
        value={value}
        className={classNames(s.input, "regularText", error && s.onErrorInput)}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
      />
      {/* Input type text */}

      {/* Inputs label */}
      <label
        className={classNames(s.label, "regularText", error && s.onErrorLabel)}
      >
        {label}
      </label>
      {/* Inputs label */}

      {/* Helper for mobile phone rendering logic */}
      {name === "phone" && !error && (
        <p className={s.helper}>+38 (XXX) XXX - XX - XX</p>
      )}
      {/* Helper for mobile phone rendering logic */}

      {/* Error messages rendering logic */}
      {error && <p className={s.onErrorHelper}>{error}</p>}
    </div>
  );
};
