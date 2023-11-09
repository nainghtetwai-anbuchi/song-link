import React from "react";
import SectionLayout from "./SectionLayout";
import NavLink from "./NavLink";
import HeartIcon from "../icons/heart-icon.svg";

interface Props {
  scrollToSection: (sectionId: string) => void;
}

const SmallNavbar = ({ scrollToSection }: Props) => {
  return (
    <div className="fixed top-0 z-40 mt-[97px] flex h-[64px] w-full items-center bg-black px-4 text-grey-dark">
      <SectionLayout>
        <div className="flex">
          {/* <div className=" flex-1 border border-red-500 sm:hidden">
            <select
              name=""
              id=""
              className="w-[90%] min-w-[110px] max-w-[200px] px-8"
            >
              <option className="" value="">
                All
              </option>
              <option value="">Trending Now</option>
              <option value="">New Songs</option>
              <option value="">Artists</option>
            </select>
          </div> */}

          <div className=" flex gap-4 text-xs xs:text-base">
            <div onClick={() => scrollToSection("hero")}>
              <NavLink name="All" isActive={true} />
            </div>
            <div onClick={() => scrollToSection("trendingnow")}>
              <NavLink name="Trending Now" isActive={false} />
            </div>
            <div onClick={() => scrollToSection("newsongs")}>
              <NavLink name="New Songs" isActive={false} />
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default SmallNavbar;