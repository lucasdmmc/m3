import { HeadFC, PageProps } from "gatsby"
import React, { Fragment, useEffect, useState } from "react"
import metaverse from "../images/m3-metaverse.png"
import m3Footer from "../images/m3-footer.png"
import { Envelope } from "phosphor-react"
import ModelViewer from "../components/ModelViewer/ModelViewer"
import { Canvas } from "@react-three/fiber"
import 'bootstrap/dist/css/bootstrap.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Fragment>
      <main className="relative bg-red flex flex-col justify-center items-center max-w-[1200px] mx-auto">
        <div style={{
          WebkitOverflowScrolling: "touch",
          overflow: "hidden",
          height: "500px",
        }} className="max-w-full overflow-x-hidden flex justify-center items-center">
          <ModelViewer />
        </div>
        <div className="flex flex-col gap-9 bg-zinc-900 pb-10 sm:pb-4 md:h-[600px]">
          <img className="mt-10" src={metaverse} alt="" />

          <strong className="uppercase text-center text-lg sm:text-3xl md:text-4xl text-zinc-200 px-4">
            We are a collective of IRL models & 3D artists. We support eachother & collectively resist IBS.
          </strong>

          <span className="text-justify text-zinc-400 text-base sm:text-2xl md:text-3xl px-6">
            Demand always fluctuates, but when you ARE the commodity, adjusting yourself to trends isn't sustainable. Our
            difference makes us valuable & together with some of the most talented 3D artists on the internet and blockchain
            technology we can make sure the future of fashion stays relevant for humans that value a world where humans thrive
            and don't oppress each-other with outdated narratives.
          </span>
        </div>
        <div className="border border-zinc-600 h-56 md:h-[500px] w-full flex justify-center items-center bg-zinc-900 px-5">
          <a href="mailto:metaversemusemgmt@gmail.com" className="flex justify-center w-40 sm:w-52 md:w-full text-zinc-500">
            <Envelope type="" size={300} weight="thin" />
          </a>
        </div>
        <div className=" border-x border-b border-zinc-600 p-10 w-full bg-zinc-900 flex items-center justify-center">
          <img src={m3Footer} alt="" />
        </div>
      </main>
    </Fragment>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
