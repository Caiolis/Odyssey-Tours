import styled from "styled-components";

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  padding: 25px 0px 0px 0px;
  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #323232;
  }
`;

export const MainImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    max-height: 370px;
    border-radius: 20px;
    box-shadow: 0px 9.953792572021484px 9.953792572021484px 0px #00000026;
  }
`;

export const MainInformationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  ion-icon {
    color: #323232;
    font-size: 26px;
  }
`;

export const HotelName = styled.h2`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 22px;
  color: #323232;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LocationTitle = styled.h6`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 17px;
  color: #636363;
`;

export const Description = styled.h6`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 15px;
  color: #636363;
  text-align: justify;
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 23px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;