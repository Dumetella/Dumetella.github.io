import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/globalStyles/globalHTML';
import Button from '../GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

export default function Hero() {
  return (
    <>
      <Section row={true} nopadding={true}>
        <LeftSection>
          <SectionTitle main={true} center={true}>
            Hi <br />
            I am Dumetella
          </SectionTitle>
          <SectionText>
            I like coffee and to create useless web-applications at 5AM.
          </SectionText>

        </LeftSection>
      </Section>
    </>
  )
}

//<Button onClick={props.handleClick}>Invite to Dota2</Button>
