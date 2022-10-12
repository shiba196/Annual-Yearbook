import * as React from "react";
import HeaderComponent from "../components/javascript/header.jsx";
import Main from "../components/javascript/main.jsx";

const IndexPage = () => {
  return (
    <>
      <HeaderComponent />
      <Main />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Annual Yearbook</title>;