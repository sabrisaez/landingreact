import React from "react";
import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  padding: 50px 0;
  width: 100%;
  background: white;
  h2 {
    font-size: 2.5rem;
    color: #7aa399;
    margin: 0 15px;
    @media (max-width: 576px) {
      font-size: 2rem;
    }
  }
`;

export const ContactInput = styled.input`
  padding: 12px 12px 12px 12px;
  border-radius: 8px;
  max-width: 250px;
  width: 100%;
  background-color: white;
  color: black;
  outline: none;
  border: none;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #aec6e9;
  padding: 30px;
  border-radius: 20px;
  max-width: 310px;
  width: 90%;
`;

export const ContactBottom = styled.input`
  border: 1px solid var(--colorverdegris);
  cursor: pointer;
  font-size: 15px;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
`;

export const ContactTextArea = styled.textarea`
  padding: 12px 12px 12px 12px;
  border-radius: 8px;
  max-width: 250px;
  width: 100%;
  background-color: white;
  color: black;
  outline: none;
  border: none;
`;
