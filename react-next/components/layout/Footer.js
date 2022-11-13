import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-top: 1px solid #ddd;
  p {
    font-size: 12px;
    color: #888;
  }
`;
const Footer = () => {
  return (
    <FooterStyled>
      <p>Copyright Ⓒ Soyeon.2022 . All rights reserved.</p>
    </FooterStyled>
  );
};

export default Footer;
