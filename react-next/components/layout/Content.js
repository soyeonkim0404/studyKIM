import styled from "styled-components";
const ContentStyled = styled.div`
  flex: 1 1 auto;
  width: calc(100% - 230px);
  /*min-height: 100vh;*/
  padding: 30px;
  background: #fff;
  box-sizing: border-box;
`;
const Content = () => {
  return (
    <ContentStyled>
      <p>메인 영역</p>
    </ContentStyled>
  );
};

export default Content;
