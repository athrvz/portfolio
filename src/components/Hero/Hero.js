import React from 'react';

import { SecondaryBtn, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>

      <SectionText>
        A Computer Engineering UnderGrad, fascinated by technology and always has an urge to Learn and gain Experience.
      </SectionText>
      
      {/* // Email / other link / anything */}
      <Button onClick = {() => window.location = "#about"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;