import React from "react";

//Components
import ButtonLink from "components/ButtonLink/index";
import LogoApp from "components/Logos/LogoApp";

export default function Home() {
  return (
    <div>
      <section className="App-header">
        <LogoApp className="App-Logo" maxHeight="100px" />
        <ButtonLink whereTo="/register" className="button">
          <b>GO!</b>
        </ButtonLink>
      </section>
    </div>
  );
}
