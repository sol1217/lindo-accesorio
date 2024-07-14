"use client";

import Banner1 from "../components/home/Banner1";
import Banner2 from "../components/home/Banner2";
import Banner3 from "../components/home/Banner3";
import ExpertChoice from "../components/home/ExpertChoice";
import NicheExplorer from "../components/home/NicheExplorer";
import Steps from "../components/home/Steps";
import Trending from "../components/home/Trending";
import Main from "../components/shared/layouts/Main";
import { useRef } from "react";
import Header from "../components/shared/header/Header";

const Home = () => {
  const banner1Ref = useRef(null);
  const stepsRef = useRef(null);
  const newArrivalsRef = useRef(null);
  const banner2Ref = useRef(null);
  const expertChoiceRef = useRef(null);
  const nicheExplorerRef = useRef(null);
  const trendingRef = useRef(null);
  const banner3Ref = useRef(null);

  return (
    <>
      <Main>
        <Header />
        <main className="flex flex-col gap-y-20 w-full">
          <div ref={banner1Ref}>
            <Banner1 />
          </div>
          <div ref={stepsRef}>
            <Steps />
          </div>
          <div ref={banner2Ref}>
            <Banner2 />
          </div>
          <div ref={expertChoiceRef}>
            <ExpertChoice />
          </div>
          <div ref={nicheExplorerRef}>
            <NicheExplorer />
          </div>
          <div ref={trendingRef}>
            <Trending />
          </div>
          <div ref={banner3Ref}>
            <Banner3 />
          </div>
        </main>
      </Main>
    </>
  );
};

export default Home;
