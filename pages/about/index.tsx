import Page from "components/Page";
import Section from "components/Section";
import styled from "styled-components";

const Wrapper = styled(Page)``;

const About = () => {
  return (
    <Wrapper
      title="About"
      displayConditionAuthId="always"
      displayConditionProfileTypeId="always"
    >
      <Section label="About">About</Section>
    </Wrapper>
  );
};

export default About;
