import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/globalStyles/globalHTML';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { accomp } from '../../constants/constants';


export default function Acomplishments(): JSX.Element {
  return (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {accomp.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}+`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  )
}

