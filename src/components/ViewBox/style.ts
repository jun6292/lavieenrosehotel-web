import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13px;
  width: 294px;
  margin-right: 18px;
`;

const Text = styled.div`
    margin-right: auto;
    color: rgba(0, 0, 0, 0.44);
    font-size: 25px;
    font-family: Inter;
    font-weight: 500;
    line-height: 37.50px;
    word-wrap: break-word
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 23px;
  font-size: 19px;
  margin-left: 20px;
  padding: 10px;
  resize: none;
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid black;
  outline: none;
`;


export const S = {
  Container,
  Text,
  Textarea,
};
