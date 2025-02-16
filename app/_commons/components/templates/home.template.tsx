import React, { ReactNode } from "react";
import Header from "../organisms/header";
import SideBar from "../organisms/side-bar";

interface HomeTemplateProps {
  children: ReactNode;
}

const HomeTemplate = ({ children }: HomeTemplateProps) => {
  return (
    <div className="grid md:grid-cols-8 h-full">
      <div className="hidden md:block md:col-span-2">
        <SideBar />
      </div>
      <div className="flex flex-col md:col-span-6 h-full bg-gray-100 overflow-scroll">
        <Header />
        <div className="flex-1 mt-auto">{children}</div>
      </div>
    </div>
  );
};

export default HomeTemplate;
