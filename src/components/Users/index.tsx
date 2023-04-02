// React
import { useEffect, useState } from "react";

// Libraries
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

// Interfaces
import { IUser } from "types/user";

// Api
import { getUsers } from "API/getUsers";

// Componnets
import { User } from "./User";

// Styles
import s from "./Users.module.scss";

// URL for fetching users from API
const URL =
  "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6";

// Local interface
interface IUsers {
  isRegistered: boolean;
}

// Users component
export const Users = ({ isRegistered }: IUsers) => {
  // Array of users
  const [users, setUsers] = useState<IUser[]>([]);
  // Next page of users url
  const [nextUrl, setNextUrl] = useState("");
  // Show more button status
  const [showMore, setShowMore] = useState(true);

  // When componnet is mounted we fetch users and setting up nextUrl
  useEffect(() => {
    getUsers(URL).then((data) => {
      setUsers([...data.users]);
      setNextUrl(data.links.next_url);
    });
  }, [isRegistered]);

  // Request to next page of users
  const onClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    // Fetch users and setting up nextUrl
    getUsers(nextUrl).then((data) => {
      setUsers((prev) => [...prev, ...data.users]);
      setNextUrl(data.links.next_url);

      // Hide show more button when we reach last page
      if (data.total_pages === data.page) setShowMore(false);
    });
  };

  return (
    // Users section
    <section className={s.users}>
      <div className="container">
        {/* Section title */}
        <h2 className={classNames(s.title, "headingText")}>
          Working with GET request
        </h2>
        {/* Section title */}

        {/* List of users */}
        <ul className={s.list}>
          {users.map(({ phone, email, name, position, photo }) => (
            <User
              key={uuidv4()}
              email={email}
              name={name}
              position={position}
              phone={phone}
              photo={photo}
            />
          ))}
        </ul>
        {/* List of users */}

        {/* Show more button render logic */}
        {showMore && (
          <button className={classNames("btn", s.showMore)} onClick={onClick}>
            Show more
          </button>
        )}
        {/* Show more button render logic */}
      </div>
    </section>
  );
};
