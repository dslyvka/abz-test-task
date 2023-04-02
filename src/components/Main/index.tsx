// React
import { useState } from "react";

// Components
import { Hero } from "../Hero";
import { Users } from "../Users";
import { SignUp } from "components/SignUp";

// Main section componnet
export const Main = () => {
  // isRegistred status which is needed for updating users list and
  // SignUp component to display form or user registred component
  const [isRegistred, setIsRegistred] = useState(false);

  return (
    <main>
      <Hero />
      <Users isRegistred={isRegistred} />
      <SignUp isRegistred={isRegistred} setIsRegistred={setIsRegistred} />
    </main>
  );
};
