import React from 'react';
import { DiDatabase, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { SiEthereum, SiCodecademy, SiReact, SiDatabricks, SiGit } from "react-icons/si";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="technologies">
    <SectionDivider />
    
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in many domains.
    </SectionText>

    <List>

      <ListItem>
      <SiCodecademy size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            C++ | Java | Python | Objective C
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
        
      </ListItem>

      <ListItem>
      <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js | Django | PHP
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
      <SiEthereum size="3rem" />
        <ListContainer>
          <ListTitle>BlockChain</ListTitle>
          <ListParagraph>
            Experience with <br />
            Solidity | Web3.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
      <SiDatabricks size="3rem" />
        <ListContainer>
          <ListTitle>DataScience</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python : Pandas | Sklearn | Numpy
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
      <SiGit size="3rem" />
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git | Docker
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>

    <SectionText>
      I also have an experience of using Cloud Computing Platforms like Google Cloud Platform (GCP) and Amazon Web Services (AWS).
    </SectionText>

  </Section>
);

export default Technologies;
