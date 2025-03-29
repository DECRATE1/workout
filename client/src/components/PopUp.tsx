import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import PopUpRow from "./PopUpRow";
export default function ExercisePopUp() {
  const [iconIsHide, setIconIsHide] = useState<boolean>(false);

  const handleIcon = (e?: ChangeEvent<HTMLInputElement>) => {
    if (e) {
      if (e.target.value.length > 0) {
        return setIconIsHide(true);
      }
      return setIconIsHide(false);
    }
  };
  return (
    <div className="absolute w-[50%] h-full bg-black flex flex-col overflow-y-scroll overflow-ellipsis">
      <span className="text-[48px] items-center justify-center w-full flex mt-5 select-none">
        Упражнения
      </span>

      <search className="w-full items-center justify-center flex mt-5">
        <form className="relative">
          <input
            className=" outline-0 w-[647px] h-[72px] bg-[#FA1059] rounded-full flex items-center pl-2 text-transparent [text-shadow:0px_0px_0px_white] text-[24px]"
            type="search"
            onChange={(e) => handleIcon(e)}
            onFocus={() => setIconIsHide(true)}
            onBlur={(e) =>
              setIconIsHide(e.target.value.length > 0 ? true : false)
            }
          ></input>
          {!iconIsHide && (
            <IoSearchSharp
              className="absolute top-[50%] translate-y-[-50%] ml-2"
              size={36}
            />
          )}
        </form>
      </search>

      <div className="w-full flex flex-col mt-10 overflow-x-scroll gap-y-10">
        <PopUpRow
          text={"Отжумания"}
          url={"/push.jpg"}
          exerciseId={1}
        ></PopUpRow>
      </div>
    </div>
  );
}
