import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { HomeLayout } from "../../layout/home/home_layout";
import { Footer } from "../../components/footer/footer";
import {
  ContactContainer,
  ContactForm,
  ContactInput,
  ContactTextArea,
  ContactBottom,
} from "./styles";

export const Contactpage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomeLayout></HomeLayout>
      <ContactContainer>
        <h2>♡ Contacto ♡</h2>
        <ContactForm action="" noValidate>
          <ContactInput type="text" placeholder="Nombre" id="input--nombre" />
          <ContactInput
            type="text"
            placeholder="Apellido"
            id="input--apellido"
          />
          <ContactInput type="email" placeholder="Email" id="input--mail" />
          <ContactTextArea
            name=""
            id="input--mensaje"
            cols="20"
            rows="8"
            placeholder="Mensaje (150 caracteres max.)"
            maxLength="150"
          />
          <ContactBottom type="submit" value="Enviar" id="form--submit" />
        </ContactForm>
      </ContactContainer>
      <Footer></Footer>
    </div>
  );
};
