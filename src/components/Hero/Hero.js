import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/globalStyles/globalHTML';
import Button from '../GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi <br />
          I am Dumetella
        </SectionTitle>
        <SectionText>
          I like coffee and to create useless web-applications at 5AM.
        </SectionText>

      </LeftSection>
    </Section>
  </>
);

export default Hero;

//<Button onClick={props.handleClick}>Invite to Dota2</Button>