import { ChangeEvent, useEffect, useRef, useState } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
export default function CreateWorkout() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const handleHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "5px";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
      textAreaRef.current.style.paddingBottom = "10px";
    }
  };

  const handleCreateWorkoutSubmit = async (formData: FormData) => {
    const form = formData;

    const token = jwt.decode(localStorage.getItem("token") as string);
    form.append("authorId", token?.sub as string);
    const response = await fetch(
      "http://localhost:3001/api/workout/createWorkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(form)),
      }
    );
    if (response.ok) {
      const { body } = await response.json();
      router.push("/Workout/" + body.authorid + "/" + body.workoutId);
      return;
    }
    return;
  };

  return (
    <div className="min-h-screen items-center justify-center flex">
      <form
        className="flex flex-col gap-y-10 w-full items-center justify-center"
        action={handleCreateWorkoutSubmit}
      >
        <input
          className="bg-[#FA1059] font-bold w-[40rem] h-[4.5rem] rounded-4xl text-white text-[28px] pl-2 outline-0 placeholder-white focus:text-transparent focus:[text-shadow:0px_0px_0px_white] focus:placeholder:opacity-0"
          placeholder="НАЗВАНИЕ"
          name="title"
        ></input>

        <textarea
          className="bg-[#FA1059] font-bold resize-none overflow-hidden w-[40rem] min-h-[4.5rem] rounded-4xl text-white text-[28px] pl-2 outline-0 placeholder-white focus:text-transparent focus:[text-shadow:0px_0px_0px_white] focus:placeholder:opacity-0 pt-4"
          placeholder="ОПИСАНИЕ"
          ref={textAreaRef}
          maxLength={560}
          style={{ height: "1px" }}
          onInput={handleHeight}
          name="description"
        ></textarea>

        <button
          className="text-[24px] text-white bg-[#FA1059] px-6 py-2 rounded-full font-black cursor-pointer"
          type="submit"
        >
          СОЗДАТЬ
        </button>
      </form>
    </div>
  );
}
