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
            Fueled by coffee and addicted to coding all-nighters.
          </SectionText>
          {/* <Button>Contact me</Button> */}
        </LeftSection>
      </Section>
    </>
  )
}


