import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { HomeLayout } from "../../layout/home/home_layout";
import { Footer } from "../../components/footer/footer";
import {
  AboutContainer,
  AboutTittle,
  AboutText,
  AboutImg,
  Abouth2,
  StyledLinkAbout,
} from "./styles";

export const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <HomeLayout></HomeLayout>
      <AboutTittle> ♡ ABOUT US ♡ </AboutTittle>
      <Abouth2>Kuromi's wicked dreams</Abouth2>
      <AboutContainer>
        <AboutText>
          <span>
            En Kuromi's wicked dreams, nos apasiona llevar la magia y la ternura
            de Sanrio a todos los amantes de los personajes más adorables.
          </span>
          <span>
            En Kuromi's wicked dreams te ofrecemos una cuidadosa selección de
            productos de alta calidad de Sanrio. Desde peluches hasta artículos
            de papelería, cada producto es elegido pensando en llevar la magia
            de Kuromi directamente a tu hogar.
          </span>
          <span>
            ¡Te invitamos a unirte a nuestra comunidad de amantes de Kuromi!
            Seguinos en redes sociales para descubrir las últimas novedades,
            participar en sorteos y conectarte con otros fans apasionados en
            Argentina.
          </span>
          <span>
            ¡Explora nuestro catálogo y sumérgete en el encantador mundo de
            Kuromi en Argentina!
          </span>
          <StyledLinkAbout to="/products">
            <button>Ver Productos</button>
          </StyledLinkAbout>
        </AboutText>
        <AboutImg>
          <img
            src="https://64.media.tumblr.com/55e31d179b605f9205dbcdd0296cba34/6884adc85c7949a3-e0/s1280x1920/4bcda1f41173337d1a53214ecd218fd3bb58e495.png"
            alt=""
          />
        </AboutImg>
      </AboutContainer>

      <Footer />
    </div>
  );
};
