import React from 'react';

//Components
import LogoApp from 'components/Logos/LogoApp';
import ButtonLink from 'components/ButtonLink/index';

export default function Home() {
  return (
    <div>
      <section className="App-header">
        <LogoApp className="App-Logo" />
        <div>
          <ButtonLink whereTo="/login" className="button" width="40px">
            <b>GO!</b>
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
