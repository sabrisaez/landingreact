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
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
`;

export const Disclaimer = styled.div`
  background-color: #7fa37a;
  p {
    color: white;
    font-weight: 500;
  }
`;
