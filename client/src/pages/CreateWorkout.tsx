import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function CreateWorkout() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>("");
  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "5px";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
      console.log(textAreaRef.current.style.height.split("px"));
    }
  };

  return (
    <div className="min-h-screen items-center justify-center flex">
      <form className="flex flex-col gap-y-10">
        <input
          className="bg-[#FA1059] font-bold w-[40rem] h-[4.5rem] rounded-4xl text-white text-[28px] pl-2 outline-0 placeholder-white focus:text-transparent focus:[text-shadow:0px_0px_0px_white] focus:placeholder:opacity-0"
          placeholder="Title"
        ></input>

        <textarea
          className="bg-[#FA1059] font-bold resize-none overflow-hidden w-[40rem] min-h-[4.5rem] rounded-4xl text-white text-[28px] pl-2 outline-0 placeholder-white focus:text-transparent focus:[text-shadow:0px_0px_0px_white] focus:placeholder:opacity-0 pt-4"
          style={{
            height: "1px",
            paddingTop:
              +(textAreaRef.current?.style.height as string).split("px")[0] >=
              72
                ? "15px"
                : "",
            paddingBottom:
              +(textAreaRef.current?.style.height as string).split("px")[0] >=
              72
                ? "15px"
                : "15",
          }}
          placeholder="Title"
          ref={textAreaRef}
          onInput={handleHeight}
        ></textarea>

        <input
          className="bg-[#FA1059] font-bold w-[40rem] h-[4.5rem] rounded-4xl text-white text-[28px] pl-2 outline-0 placeholder-white focus:text-transparent focus:[text-shadow:0px_0px_0px_white] focus:placeholder:opacity-0"
          placeholder="Description"
        ></input>
      </form>
    </div>
  );
}
