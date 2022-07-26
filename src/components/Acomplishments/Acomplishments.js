import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, BoxDesc } from './AcomplishmentsStyles';

const data = [
  // { number: 20, text: 'Open Source Projects'},
  // { number: 1000, text: 'Students', },
  // { number: 1900, text: 'Github Followers', },
  // { number: 5000, text: 'Github Stars', }
  {number: "All India Rank 16", text: "DD Robocon 2021",
    desc1: "• DD Robocon is a National Competition organised by IIT Delhi, organised internationally by Asia‑Pacific Broadcasting Union.",
    desc2: "• I contributed as an Embedded Systems Programmer to the Team and we made it to the finals and secured an All India Rank 16"
  }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>

    {/* <Boxes> */}
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
          <BoxDesc>{card.desc1}</BoxDesc>
          <BoxDesc>{card.desc2}</BoxDesc>
        </Box>
      ))}
    {/* </Boxes> */}
  </Section>
);

export default Acomplishments;
