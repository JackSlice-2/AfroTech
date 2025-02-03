"use client";

import React from "react";
import PageContainer from "@/app/components/Elements/PageContainer";
import AboutClient from "@/app/components/AboutClient";
import Hero from "./Hero";

const App: React.FC = () => {
  return (
    <PageContainer>
      <div className="h-full w-full md:flex-row lg:flex-row xl:flex">
        <div className="flex flex-col justify-center gap-5 flex-1 w-full items-center lg:pl-20 xl:pl-20">
          <Hero />
          <hr className="my-8 mt-16"/>
          <AboutClient />
        </div>
      </div>
    </PageContainer>
  );
};

export default App;
