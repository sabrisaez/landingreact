import React from "react";
import {
  Contact,
  Disclaimer,
  FooterLinks,
  FooterLinksContainer,
  FooterWrapper,
  SocialMedia,
} from "./styles";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinksContainer>
        <SocialMedia>
          <h2>Redes sociales</h2>
          <div>
            {" "}
            <FaInstagram /> @kuromiwickedstore
          </div>
          <div>
            <FaTiktok />
            @kuromiwickedstore
          </div>
          <div>
            <FaFacebook /> Kuromi's wicked dreams Store
          </div>
        </SocialMedia>
        <FooterLinks>
          <h2>Links</h2>
          <a href="#">Home</a>
          <a href="#">Store</a>
          <a href="/#">Términos de Uso</a>
          <a href="/#">Trabajá con nosotros</a>
          <a href="/#">Soporte</a>
        </FooterLinks>
        <Contact>
          <h2>Contacto</h2>
          <span>Galería Bond Street - Av. Sta. Fe 1670, local XX</span>
          <span>Teléfono: 11 6666 6666</span>
        </Contact>
      </FooterLinksContainer>

      <Disclaimer>
        <p>Kuromi's wicked dreams ® 2023 - Desarrollado por Sabrina ♡</p>
      </Disclaimer>
    </FooterWrapper>
  );
};
