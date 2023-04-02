// React
import { useEffect, useState, memo } from "react";

// Libraries
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

// Api
import { getPositions } from "API/getPositions";

// Components
import { Position } from "./Position";

import s from "./Positions.module.scss";

// Local interface
interface IPosition {
  id: number;
  name: string;
}

// Poaitions (radio buttons list component)
export const Positions = memo(() => {
  const [positions, setPositions] = useState<IPosition[]>([]);

  // When component is mounted we have to fetch all actual positions from api
  useEffect(() => {
    getPositions().then((data) => setPositions([...data.positions]));
  }, []);

  return (
    <div className={s.positionsContainer}>
      {/* Title */}
      <h3 className={classNames("regularText", s.title)}>
        Select your position
      </h3>
      {/* Title */}

      {/* Positions list */}
      <ul>
        {positions.map(({ name, id }: IPosition) => (
          // Position item
          <Position id={id} name={name} key={uuidv4()} />
        ))}
      </ul>
      {/* Positions list */}
    </div>
  );
});
