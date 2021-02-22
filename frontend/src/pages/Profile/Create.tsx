import React from "react";

//import libraries
import styled from "styled-components";

//import components
import FullLayout from "../../components/FullLayout";
import { FilledButton } from "../../components/Button";
import { Input } from "../../components/Input";
import ReactSelect from "../../components/ReactSelect";

//import styles and assets
import { colors, sizes } from "../../components/StyleVariables";

//local data
import { profileOptions } from "../../data/profileOptions";

const Create = () => {
  return (
    <FullLayout>
      <Wrapper>
        <Header>
          <h1>Tell us about yourself</h1>
          <Article>
            <p>Tell us a little bit about you to get started.</p>
          </Article>
        </Header>
        <Main>
          <form>
            <Section>
              <Input
                name="Your title"
                label="Your title"
                placeholder="e.g. Product Designer"
                shape="underline"
                margin={sizes.xs}
              />
              <Input
                name="Experience level"
                label="Experience level"
                placeholder="e.g. 5 years"
                shape="underline"
                margin={sizes.xs}
              />
              <ReactSelect
                label="Your Industry"
                data={profileOptions}
                margin={sizes.s}
              />
              <ReactSelect
                label="Your Interests"
                data={profileOptions}
                margin={sizes.s}
              />
            </Section>
            <FilledButton label="Start" color="blue" shape="pill" fullwidth />
          </form>
        </Main>
      </Wrapper>
    </FullLayout>
  );
};

const Wrapper = styled.div`
  @media (min-width: 640px) {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 1em;
`;

const Article = styled.article`
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${colors.gray};
  margin: 0.5em 0;
`;

const Main = styled.main``;

const Section = styled.section`
  margin: 2em 0;
`;

export default Create;
