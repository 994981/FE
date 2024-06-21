import { useState } from "react";
import BoardListTemplate from "../templates/board/BoardListTemplate";
import FreeBoardItem from "../molecules/freeBoard/FreeBoardItem";
import PostSelection from "./../atoms/post/PostSelection";
import Input from "../common/Input";
import styled from "styled-components";

import { TbMusicSearch } from "react-icons/tb";

const BoardPage = () => {
  const [input, setInput] = useState<string>("");
  return (
    <>
      <BoardListTemplate>
        <Container>
          <PostSelection />
          <Input
            input={input}
            setInput={setInput}
            width="0.2rem"
            placeholder={"검색어 입력"}
            button={{
              icon: <TbMusicSearch size="1.2rem" />,
            }}
          />
        </Container>
        <FreeBoardItem />
        <FreeBoardItem />
        <FreeBoardItem />
        <FreeBoardItem />
        <FreeBoardItem />
        <FreeBoardItem />
      </BoardListTemplate>
    </>
  );
};

export default BoardPage;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem; /* Optional: add some space between elements */
`;
