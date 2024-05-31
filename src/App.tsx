import { Routes, Route } from "react-router-dom";

import {
  MainPage,
  SignUpPage,
  LoginPage,
  AlbumDetailPage,
} from "./components/pages";

import { useAxiosInterceptors } from "./hooks";

import GlobalStyle from "./styles/GlobalStyle";
import AlbumPage from "./components/pages/AlbumPage";

// import client from "./config/axios";

function App() {
  useAxiosInterceptors();

  /* test start: 참고용 테스트 코드 입니다. */
  // const testAPI = async () => {
  //   try {
  //     const res = await client.post("/api/auth/signup", {
  //       email: "eileel@naver.com",
  //       password: "password",
  //       nickname: "0velop",
  //       birthday: "1999-08-27",
  //       gender: "FEMALE",
  //       name: "김아영",
  //     });
  //     console.log(res);
  //   } catch (err) {
  //     console.log("test API error: ", err);
  //   }
  // };
  /* test end */

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/album/:id" element={<AlbumDetailPage />} />
        <Route path="/album/*" element={<AlbumPage />} />
      </Routes>
    </>
  );
}

export default App;
