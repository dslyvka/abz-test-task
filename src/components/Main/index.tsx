// React
import { useState } from "react";

// Components
import { Hero } from "../Hero";
import { Users } from "../Users";
import { SignUp } from "components/SignUp";

// Main section componnet
export const Main = () => {
  // isRegistered status which is needed for updating users list and
  // SignUp component to display form or user registered component
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <main>
      <Hero />
      <Users isRegistered={isRegistered} />
      <SignUp isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
    </main>
  );
};
