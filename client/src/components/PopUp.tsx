import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import PopUpRow from "./PopUpRow";
import PopUpSearch from "./PopUpSearch";
import { GetStaticProps } from "next";

export default function ExercisePopUp({
  exercises,
  handlePopUp,
}: {
  exercises: {
    id: number;
    title: string;
    description: string;
    linkToVideo: string;
  }[];
  handlePopUp: () => void;
}) {
  return (
    <div className="absolute w-[50%] h-full bg-black flex flex-col overflow-y-scroll overflow-ellipsis">
      <IoCloseSharp
        className="ml-auto mt-10 cursor-pointer text-end right-0 text-white"
        viewBox="0 0 512 512"
        size={100}
        onClick={handlePopUp}
      />
      <span className="text-[48px] items-center justify-center w-full flex mt-5 select-none">
        Упражнения
      </span>

      <PopUpSearch></PopUpSearch>
      <div className="w-full flex flex-col mt-10 overflow-y-scroll gap-y-10 mb-10 ">
        {exercises.map((items) => {
          return (
            <PopUpRow
              text={items.title}
              url={"/push.jpg"}
              exerciseId={items.id}
            ></PopUpRow>
          );
        })}
      </div>
    </div>
  );
}
