import styled from "styled-components";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";

const Wrap = styled.div``;

const Container = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  height: calc(100vh - 40px);
  box-sizing: border-box;
  .mobile & {
    padding-left: 0 !important;
  }
`;

const Index = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const mobile = useMediaQuery({ query: "(max-width:767px)" });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return (
    <Wrap className={isMobile ? "mobile" : "pc"}>
      <Header />
      <Container>
        <SideBar />
        <Content>{children}</Content>
      </Container>
      <Footer />
    </Wrap>
  );
};

export default Index;
