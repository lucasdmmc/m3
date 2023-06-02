import { HeadFC, PageProps } from "gatsby"
import React from "react"
import { Home } from "../components/Home";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>M3</title>;
