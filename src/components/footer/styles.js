import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #7aa399;
  a {
    color: #7aa399;
  }
`;

export const FooterLinksContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Disclaimer = styled.div`
  background-color: #7fa37a;
  width: 100%;
  p {
    color: white;
    font-weight: 500;
    text-align: center;
  }
`;
