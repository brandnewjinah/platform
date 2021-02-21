import React from "react";

//import libraries
import styled from "styled-components";
import Select from "react-select";

//import components
import FullLayout from "../../components/FullLayout";
import { FilledButton } from "../../components/Button";
import { Input } from "../../components/Input";

//local data
import { profileOptions } from "../../data/profileOptions";

const Create = () => {
  console.log(profileOptions);
  return (
    <FullLayout>
      <Wrapper>
        <Header>
          <h1>Welcome</h1>
          <Article>
            <p>Tell us a little bit about you.</p>
          </Article>
        </Header>
        <Main>
          <form>
            <Section>
              <Input label="Your title" />
              <Input label="Experience level" />
              <SelectWrapper>
                <p>Your industry</p>
                <Select
                  defaultValue={[profileOptions[2], profileOptions[3]]}
                  isMulti
                  name="colors"
                  options={profileOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </SelectWrapper>
              <SelectWrapper>
                <p>Your interests</p>
                <Select
                  defaultValue={[profileOptions[2], profileOptions[3]]}
                  isMulti
                  name="colors"
                  options={profileOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </SelectWrapper>
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
  margin-bottom: 1em;
`;

const Article = styled.article`
  font-size: 1rem;
  margin: 1em 0;
`;

const Main = styled.main``;

const Section = styled.section`
  margin: 2em 0;
`;

const SelectWrapper = styled.div`
  p {
    font-size: 0.925rem;
  }
`;

export default Create;
