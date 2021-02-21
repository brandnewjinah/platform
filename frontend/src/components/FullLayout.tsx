import React, { FC } from "react";

import Header from "./Header";
import Footer from "./Footer";

//import styles and assets
import styled from "styled-components";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f2f4fa;
  min-height: 100vh;
`;

const Container = styled.div`
  /* background-color: #d8dff1; */
  width: 100%;
  padding: 1em;

  @media (min-width: 640px) {
  }

  @media (min-width: 1024px) {
    padding: 0 1.375em;
  }

  @media (min-width: 1280px) {
    /* max-width: 1280px;
    margin: 0 auto; */
    padding: 0;
  }
`;

export default Layout;
