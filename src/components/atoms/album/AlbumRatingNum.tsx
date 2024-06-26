import styled from "styled-components";

import { IoPersonSharp } from "react-icons/io5";

import color from "../../../styles/color";

type Props = {
  count: number;
};

const AlbumRatingNum = ({ count }: Props) => {
  return (
    <Container>
      <IoPersonSharp color={color.COLOR_MAIN} />
      {count}
    </Container>
  );
};

export default AlbumRatingNum;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 0.7rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
