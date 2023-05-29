import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import {
  TopBar,
  MainImageContainer,
  MainInformationContainer,
  HotelName,
  LocationContainer,
  LocationTitle,
  Description,
  ButtonContainer,
} from "./styled";

export default function HotelPage() {
  return (
    <Container>
      <TopBar>
        <ion-icon name="arrow-back-outline" size="large"></ion-icon>
        <h1>Hotel</h1>
      </TopBar>

      <MainImageContainer>
        <img src="https://images.unsplash.com/photo-1685039391282-aa6987088cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=626&q=80" />
      </MainImageContainer>

      <MainInformationContainer>
        <HotelName>RedFish Lake</HotelName>
        <LocationContainer>
          <ion-icon name="location"></ion-icon>
          <LocationTitle>Idaho</LocationTitle>
        </LocationContainer>
      </MainInformationContainer>

      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est
        magna, lacinia sed blandit quis, scelerisque sed massa. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Morbi molestie ante
        quis arcu vehicula mollis. Sed sapien enim, fringilla sed risus eget,
        mattis consectetur diam. Vestibulum semper, nunc id ornare iaculis, odio
        sem aliquam diam, id lacinia justo sem at massa. Proin accumsan massa
        vitae condimentum iaculis.
      </Description>

      <ButtonContainer>
        <Button>Book Now</Button>
      </ButtonContainer>
    </Container>
  );
}
