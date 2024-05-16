import styled from "styled-components";

import {
  AlbumName,
  AlbumRating,
  AlbumType,
  ArtistName,
  AlbumRatingNum,
} from "../../atoms";

import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

const AlbumInfo = () => {
  return (
    <Container>
      <Wrapper>
        <AlbumName />
      </Wrapper>

      <Wrapper>
        <ArtistName />

        <AlbumRating />
      </Wrapper>

      <Wrapper>
        <AlbumType />

        <AlbumRatingNum />
      </Wrapper>
    </Container>
  );
};

export default AlbumInfo;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  border-radius: 0.3rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
