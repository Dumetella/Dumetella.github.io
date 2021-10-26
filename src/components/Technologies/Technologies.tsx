import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/globalStyles/globalHTML';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

export default function Technologies() {
  return (
    <Section id="tech">
      <SectionDivider divider={true} />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I have little commercial development experience, but I have a lot of enthusiasm for the modern front-end
      </SectionText>
      <List>
        <ListItem>
          <picture>
            <DiReact size={'3em'} />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              intermediate experience with: <br />
              React.js, <br />
              TypeScript, <br />
              Redux, <br />
              styled-components <br />
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiFirebase size={'3em'} />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Beginner experience with: <br />
              Node.js, <br />
              Express, <br />
              SQL, <br />
              Nginx <br />
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiZend size={'3em'} />
          </picture>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Average experience with <br />
              Figma and Photoshop
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider colorAlt={true} />
    </Section>
  )
}

