import { ChangeEvent, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function PopUpSearch() {
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
          min={3}
        ></input>
        {!iconIsHide && (
          <IoSearchSharp
            className="absolute top-[50%] translate-y-[-50%] ml-2"
            size={36}
          />
        )}
      </form>
    </search>
  );
}
