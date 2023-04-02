// Libraries
import classNames from "classnames";

import s from "./Positions.module.scss";

// Local interface
interface IPosition {
  id: number;
  name: string;
}

// Position component
export const Position = ({ name, id }: IPosition) => {
  return (
    <li className={s.item}>
      <label className={classNames(s.inputContainer, "regularText")}>
        {/* Radio button  */}
        <input
          type="radio"
          value={`${id}`}
          className={s.input}
          name="position_id"
          defaultChecked={id === 1 && true}
        />
        {/* Radio button  */}

        {name}

        {/* Custom radio button */}
        <span className={s.customButton}></span>
        <span className={s.customButtonFilled}></span>
        {/* Custom radio button */}
      </label>
    </li>
  );
};
