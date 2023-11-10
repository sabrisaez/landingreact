import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  a {
    color: white;
  }
`;

export const FooterLinksContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  padding-bottom: 20px;
  background-color: #aec6e9;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  a {
    color: white;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Disclaimer = styled.div`
  background-color: #7aa399;
  width: 100%;
  p {
    color: white;
    font-weight: 500;
    text-align: center;
  }
`;
