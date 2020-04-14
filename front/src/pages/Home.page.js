import React from 'react';
import ButtonLink from 'components/ButtonLink';
import LogoApp from 'components/Logos/LogoApp';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoApp className="App-Logo" />
        <ButtonLink whereTo="/register" className="button">
          GO!
        </ButtonLink>
      </header>
    </div>
  );
}
