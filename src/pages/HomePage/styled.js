import styled from "styled-components";

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.input`
  background-color: #fff;
  border: 1px solid #E9E9E9;
  outline: none;
  width: 100%;
  height: 45px;
  &::placeholder {
    color: #afafaf;
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 400;
  }
`;