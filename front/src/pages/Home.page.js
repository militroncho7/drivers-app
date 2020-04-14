import React from "react";
import ButtonLink from "components/ButtonLink/Index";
import LogoApp from "components/Logos/LogoApp";

export default function Home() {
  return (
    <div>
      <header className="App-header">
        <LogoApp className="App-Logo" maxHeight="100px" />
        <ButtonLink whereTo="/register" className="button">
          GO!
        </ButtonLink>
      </header>
    </div>
  );
}
