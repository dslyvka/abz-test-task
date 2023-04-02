//  React
import { useState } from "react";

// Libraries
import classNames from "classnames";

// Interfaces
import { IUser } from "types/user";

//  Components
import { Tooltip } from "components/Tooltip";

// Images
import defaultUser from "images/defaultUser.png";

// Styles
import s from "./User.module.scss";

// User component
export const User = (props: IUser) => {
  const { name, phone, photo, position, email } = props;
  // Tooltip name with the help of which component renders a tooltip when it is needed
  const [tooltip, setTooltip] = useState("");

  // Function that determines whether to show a tooltip
  const onMouseEnter: React.MouseEventHandler<HTMLParagraphElement> = (e) => {
    // each user name, email or position paragraph could have tooltip, when text doesn't fit
    // so these user paragraphs have the data-id attribute with the tooltip type which is needed
    // for the component to understand exactly which tooltip needs to be shown
    const tooltipName = e.currentTarget.dataset.id as string;

    // early return pattern
    if (!(e.currentTarget.offsetWidth < e.currentTarget.scrollWidth)) return;

    // setting cursor to type pointer, when tooltip is shown like on the layout in Figma
    e.currentTarget.style.cursor = "pointer";

    // setting tooltip name in order to show the tooltip
    // with the help of which component renders a tooltip when it is needed
    // {tooltip === "position" && <Tooltip text={position} />} => tooltip render logic example
    setTooltip(tooltipName);
  };

  // Function that determines whether to hide a tooltip
  const onMouseLeave: React.MouseEventHandler<HTMLParagraphElement> = (e) => {
    // early return pattern
    if (!(e.currentTarget.offsetWidth < e.currentTarget.scrollWidth)) return;

    // setting cursor to default, when tooltip isn't shown
    e.currentTarget.style.cursor = "default";

    // setting tooltip to the empty string in order to hide the tooltip
    setTooltip("");
  };

  return (
    // Users list item
    <li className={s.item}>
      {/* User image */}
      <img
        src={photo}
        alt="user"
        width={70}
        height={70}
        className={s.img}
        // setting default user image, when we got an error from the back-end
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = defaultUser;
        }}
      />
      {/* User image */}

      {/* name */}
      <div className={s.tooltipContainer}>
        <p
          className={classNames("regularText", s.tooltip, s.name)}
          data-id="name"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {name}
        </p>
        {/* tooltip render logic */}
        {tooltip === "name" && <Tooltip text={name} />}
        {/* tooltip render logic */}
      </div>
      {/* name */}

      {/* position */}
      <div className={s.tooltipContainer}>
        <p
          className={classNames("regularText", s.tooltip)}
          data-id="position"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {position}
        </p>

        {/* tooltip render logic */}
        {tooltip === "position" && <Tooltip text={position} />}
        {/* tooltip render logic */}
      </div>
      {/* position */}

      {/* email */}
      <div className={s.tooltipContainer}>
        <p
          className={classNames("regularText", s.tooltip)}
          data-id="email"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {email}
        </p>

        {/* tooltip render logic */}
        {tooltip === "email" && <Tooltip text={email} />}
        {/* tooltip render logic */}
      </div>
      {/* email */}

      {/* phone */}
      <div className={s.tooltipContainer}>
        <p className={classNames("regularText", s.tooltip)} data-id="phone">
          {phone}
        </p>
      </div>
      {/* phone */}
    </li>
  );
};
