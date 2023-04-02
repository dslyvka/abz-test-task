// Libraries
import classNames from "classnames";

// Styles
import s from "./Hero.module.scss";

// Hero component
export const Hero = () => {
  return (
    // Hero section
    <section className={s.hero}>
      <div className="container">
        {/* Hero title */}
        <h1 className={classNames(s.title, "headingText")}>
          Test assignment for front-end developer
        </h1>
        {/* Hero title */}

        {/* Hero main text */}
        <p className={classNames("regularText", s.text)}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        {/* Hero main text */}

        {/* Hero sign up button */}
        <button className={classNames("btn", s.heroBtn, "forAnchor")}>
          <a href="#signup" className="anchor">
            .
          </a>
          Sign up
        </button>
        {/* Hero sign up button */}
      </div>
    </section>
  );
};
