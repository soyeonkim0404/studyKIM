import styled from "styled-components";

const HeaderStyled = styled.header`
  position: sticky;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
`;

const H1 = styled.h1`
  font-size: 24px;
  color: #363a42;
  span {
    font-weight: 300;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <H1>
        Soyeon <span>React Project</span>
      </H1>
    </HeaderStyled>
  );
};

export default Header;
