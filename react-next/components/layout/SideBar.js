import styled from "styled-components";

const SideBarStyled = styled.div`
  display: flex;
  flex: 0 0 230px;
  width: 230px;
  /*min-height: 100vh;*/
  padding: 30px;
  border-right: 1px solid #ddd;
  background: #ebf3ff;
  box-sizing: border-box;
`;
const SideBar = () => {
  return (
    <SideBarStyled>
      <p>사이드바</p>
    </SideBarStyled>
  );
};

export default SideBar;
